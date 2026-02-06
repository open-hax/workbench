(ns opencode-unified.persistence
  (:require [cljs.reader :as reader]))

(def prefix "opencode.workbench.")

(defn save-state! [key value]
  (try
    (.setItem js/localStorage (str prefix key) (pr-str value))
    (catch js/Error e
      (js/console.error "Failed to save state:" key e))))

(defn load-state [key default-value]
  (try
    (if-let [stored (.getItem js/localStorage (str prefix key))]
      (reader/read-string stored)
      default-value)
    (catch js/Error e
      (js/console.error "Failed to load state:" key e)
      default-value)))
