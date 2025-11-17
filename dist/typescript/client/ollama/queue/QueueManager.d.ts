import { Job, QueueMetrics, QueueConfig } from '../types.js';
export declare class QueueManager {
    private jobs;
    private priorityQueue;
    private queueMonitor;
    private config;
    private processingInterval;
    private activeJobs;
    constructor(config: QueueConfig);
    /**
     * Add a job to the queue
     */
    addJob(jobData: any): Promise<Job>;
    /**
     * Get next job from queue
     */
    getNextJob(): Job | null;
    /**
     * Mark job as completed
     */
    completeJob(jobId: string, result?: any): void;
    /**
     * Mark job as failed
     */
    failJob(jobId: string, error: Error): void;
    /**
     * Get job by ID
     */
    getJob(jobId: string): Job | undefined;
    /**
     * List jobs with filtering
     */
    listJobs(options?: {
        status?: Job['status'];
        limit?: number;
        agentOnly?: boolean;
        agentId?: string;
        sessionId?: string;
    }): Job[];
    /**
     * Get queue metrics
     */
    getMetrics(): QueueMetrics;
    /**
     * Get queue information
     */
    getQueueInfo(): {
        config: QueueConfig;
        metrics: QueueMetrics;
        activeJobs: string[];
    };
    /**
     * Start automatic job processor
     */
    startProcessor(processCallback: (job: Job) => Promise<void>): void;
    /**
     * Stop automatic job processor
     */
    stopProcessor(): void;
    /**
     * Clear all jobs
     */
    clearJobs(): void;
    /**
     * Get queue statistics
     */
    getStatistics(): {
        config: QueueConfig;
        uptime: number;
        totalJobs: number;
        pendingJobs: number;
        runningJobs: number;
        completedJobs: number;
        failedJobs: number;
        averageWaitTime: number;
        averageProcessingTime: number;
        queueDepth: number;
        throughput: number;
    };
}
//# sourceMappingURL=QueueManager.d.ts.map