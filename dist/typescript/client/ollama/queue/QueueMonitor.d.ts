import { Job, QueueMetrics } from '../types.js';
interface JobEvent {
    jobId: string;
    timestamp: number;
    eventType: 'submitted' | 'started' | 'completed' | 'failed' | 'canceled';
    job?: Job;
    error?: Error;
}
interface ThroughputMetrics {
    windowStart: number;
    windowEnd: number;
    jobCount: number;
}
export declare class QueueMonitor {
    private events;
    private throughputWindows;
    private readonly maxEvents;
    private readonly throughputWindowSize;
    /**
     * Record job submission
     */
    recordJobSubmission(job: Job): void;
    /**
     * Record job start
     */
    recordJobStart(job: Job): void;
    /**
     * Record job completion
     */
    recordJobCompletion(job: Job): void;
    /**
     * Record job failure
     */
    recordJobFailure(job: Job, error: Error): void;
    /**
     * Record job cancellation
     */
    recordJobCancellation(job: Job): void;
    /**
     * Add event to the monitor
     */
    private addEvent;
    /**
     * Update throughput metrics
     */
    private updateThroughput;
    /**
     * Get current throughput (jobs per minute)
     */
    getThroughput(): number;
    /**
     * Get detailed queue metrics
     */
    getMetrics(): QueueMetrics;
    /**
     * Get event history
     */
    getEventHistory(limit?: number): JobEvent[];
    /**
     * Get events for a specific job
     */
    getJobEvents(jobId: string): JobEvent[];
    /**
     * Get performance statistics
     */
    getPerformanceStats(): {
        hourly: {
            completed: number;
            failed: number;
            successRate: number;
            throughput: number;
        };
        daily: {
            completed: number;
            failed: number;
            successRate: number;
            throughput: number;
        };
        current: {
            throughput: number;
            queueDepth: number;
        };
    };
    /**
     * Get monitor statistics
     */
    getStatistics(): {
        totalEvents: number;
        throughputWindows: number;
        currentThroughput: number;
        performanceStats: {
            hourly: {
                completed: number;
                failed: number;
                successRate: number;
                throughput: number;
            };
            daily: {
                completed: number;
                failed: number;
                successRate: number;
                throughput: number;
            };
            current: {
                throughput: number;
                queueDepth: number;
            };
        };
        metrics: QueueMetrics;
    };
    /**
     * Reset monitor state
     */
    reset(): void;
    /**
     * Export monitor data for analysis
     */
    exportData(): {
        events: JobEvent[];
        throughputWindows: ThroughputMetrics[];
        statistics: {
            totalEvents: number;
            throughputWindows: number;
            currentThroughput: number;
            performanceStats: {
                hourly: {
                    completed: number;
                    failed: number;
                    successRate: number;
                    throughput: number;
                };
                daily: {
                    completed: number;
                    failed: number;
                    successRate: number;
                    throughput: number;
                };
                current: {
                    throughput: number;
                    queueDepth: number;
                };
            };
            metrics: QueueMetrics;
        };
        exportTimestamp: number;
    };
}
export {};
//# sourceMappingURL=QueueMonitor.d.ts.map