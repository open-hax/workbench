import { Job } from '../types.js';
export declare class PriorityQueue {
    private queues;
    private priorityOrder;
    constructor();
    /**
     * Add a job to the appropriate priority queue
     */
    enqueue(job: Job): void;
    /**
     * Get the next job based on priority
     */
    dequeue(): Job | null;
    /**
     * Remove a specific job from the queue
     */
    remove(jobId: string): boolean;
    /**
     * Find and remove a specific job from the queue, returning the job if found
     */
    findAndRemove(jobId: string): Job | null;
    /**
     * Get the number of jobs in each priority queue
     */
    getQueueCounts(): Record<string, number>;
    /**
     * Get the total number of pending jobs
     */
    size(): number;
    /**
     * Check if the queue is empty
     */
    isEmpty(): boolean;
    /**
     * Get all jobs in the queue (for debugging/monitoring)
     */
    getAllJobs(): Job[];
    /**
     * Get jobs for a specific priority level
     */
    getJobsByPriority(priority: string): Job[];
    /**
     * Clear all queues
     */
    clear(): void;
    /**
     * Get the position of a job in the queue
     */
    getJobPosition(jobId: string): number;
    /**
     * Reorder a job (change its priority)
     */
    reorderJob(jobId: string, newPriority: string): boolean;
    /**
     * Get queue statistics
     */
    getStatistics(): {
        total: number;
        counts: Record<string, number>;
        averageWaitTime: number;
        oldestJobAge: number;
        newestJobAge: number;
    };
    /**
     * Get the age of the oldest job in the queue
     */
    private getOldestJobAge;
    /**
     * Get the age of the newest job in the queue
     */
    private getNewestJobAge;
}
//# sourceMappingURL=PriorityQueue.d.ts.map