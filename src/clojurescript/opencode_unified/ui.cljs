(ns opencode-unified.ui
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdomc]
            [opencode-unified.state :as state]
            [opencode-unified.layout :as layout]
            [opencode-unified.buffers :as buffers]
            [opencode-unified.command-palette :as command-palette]
            [opencode-unified.react-reagent-seam :as seam]
            [opencode-unified.theme :as theme]
            [opencode-unified.persistence :as persistence]
            [clojure.string :as str]))

(def KEY_ROUTE "workbench.route")

(defonce current-route (r/atom (persistence/load-state KEY_ROUTE "#/")))

(defonce route-listener-installed? (atom false))

(defonce ui-root (atom nil))

(defn- sync-route!
  "Sync browser hash into reagent route state."
  []
  (let [hash-value (.-hash js/location)
        route (if (str/blank? hash-value) "#/" hash-value)]
    (reset! current-route route)
    (persistence/save-state! KEY_ROUTE route)))

(defn- seam-enabled?
  "Feature flag gate for the React host donor seam route."
  []
  (let [flags (some-> js/window (aget "__OPENCODE_FEATURE_FLAGS__"))]
    (not= false (some-> flags (aget "reactReagentSeam")))))

(defn- donor-fallback-route []
  [:div
   {:data-testid "donor-fallback-route"
    :style {:display "flex"
            :flex-direction "column"
            :height "100%"
            :overflow "hidden"
            :background "var(--bg-primary)"}}
   [:div
    {:data-testid "donor-fallback-banner"
     :style {:padding "0.75rem 1rem"
             :font-size "0.8rem"
             :color "var(--text-secondary)"
             :border-bottom "1px solid var(--border)"
             :background "var(--bg-secondary)"}}
    "React seam disabled by feature flag. Donor fallback route is active."]
   [:div.no-buffer
    {:style {:display "flex"
             :flex-direction "column"
             :height "100%"
             :overflow "hidden"}}
    [layout/search-content]]])

;; Main app component
(defn app []
  (let [buffer-content (r/track #(when-let [buffer-id (:current-buffer @state/app-state)]
                                   (get-in @state/app-state [:buffers buffer-id])))]
    
    [:div
     [theme/global-styles]
     
      (if (and (seam/spike-route? @current-route)
               (seam-enabled?))
        [seam/react-host-route]
        (if (seam/spike-route? @current-route)
          [layout/shell
           @current-route
           [donor-fallback-route]]

          ;; Unified Shell Layout
          [layout/shell
           @current-route
           (cond
             (= @current-route layout/ROUTE_DOCS)
             [layout/docs-route]

             (= @current-route layout/ROUTE_SETTINGS)
             [layout/settings-route]

             :else
             [:div.editor-area
              {:style {:display "flex"
                       :flex-direction "column"
                       :flex "1"
                       :height "100%"
                       :overflow "hidden"}}

              ;; Tab bar
              [layout/tab-bar]

              ;; Editor pane
              [:div.editor-pane
               {:style {:flex "1"
                        :display "flex"
                        :overflow "hidden"
                        :position "relative"}}

               (if @buffer-content
                 [opencode-unified.buffers/editor @buffer-content]
                 [:div.no-buffer
                  {:style {:display "flex"
                           :flex-direction "column"
                           :height "100%"
                           :overflow "hidden"}}
                  [layout/search-content]])]

              ;; Minimap (if enabled)
              (when (get-in @state/app-state [:ui :minimap])
                [layout/minimap @buffer-content])])]))]))

;; Initialize app
(defn init []
  (println "Initializing UI...")

  ;; Restore route from persistence if hash is empty
  (when (str/blank? (.-hash js/location))
    (set! (.-hash js/location) @current-route))

  (sync-route!)
  (when-not @route-listener-installed?
    (.addEventListener js/window "hashchange" sync-route!)
    (reset! route-listener-installed? true))

  ;; Keep action palette semantics on Ctrl/Cmd+P.
  (let [handle-keydown (fn [event]
                         (let [key (str/lower-case (.-key event))
                               mod? (or (.-ctrlKey event) (.-metaKey event))]
                            (when (and mod? (or (= key "p") (= key "k")))
                              (.preventDefault event)
                               (.stopPropagation event)
                               (.stopImmediatePropagation event)
                                (if (= key "p")
                                  (command-palette/handle-open-key!)
                                  (state/open-search-surface!))))) ]
    (.addEventListener js/window "keydown" handle-keydown true))

  ;; Initialize OpenPlanner-backed activity feed.
  (state/bootstrap-openplanner!)

  ;; Mount the React app
  (when-let [app-element (.getElementById js/document "app")]
    (let [root (rdomc/create-root app-element)]
      (rdomc/render root (r/as-element [app]))
      (reset! ui-root root)))

  (println "UI initialized with unified shell"))

;; Hot module replacement support
(defn ^:export reload []
  (println "Hot reloading UI...")
  (when-let [root @ui-root]
    (rdomc/render root (r/as-element [app]))))

(defn ^:export clear []
  (println "Clearing UI...")
  (when-let [root @ui-root]
    (.unmount root)
    (reset! ui-root nil)))
