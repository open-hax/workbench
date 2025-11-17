import { Job, JobSchedulerConfig } from '../types.js';
export declare class JobScheduler {
    private config;
    private agentJobCounts;
    private lastResetTime;
    constructor(config: JobSchedulerConfig);
    /**
     * Schedule jobs based on the configured algorithm
     */
    scheduleJobs(jobs: Job[]): Job[];
    /**
     * FIFO (First In, First Out) scheduling
     */
    private scheduleFIFO;
    /**
     * Priority-based scheduling
     */
    private scheduleByPriority;
    /**
     * Fair-share scheduling
     */
    private scheduleFairShare;
    /**
     * Weighted fair-share scheduling
     */
    private scheduleWeightedFairShare;
    /**
     * Apply aging to prevent starvation
     */
    applyAging(jobs: Job[]): Job[];
    /**
     * Calculate effective priority considering aging
     */
    private calculateEffectivePriority;
    /**
     * Update job count for an agent (when job completes)
     */
    decrementAgentJobCount(agentId: string): void;
    /**
     * Get scheduler statistics
     */
    getStatistics(): {
        algorithm: "fifo" | "priority" | "fair-share" | "weighted-fair-share";
        maxJobsPerAgent: number;
        agentJobCounts: {
            [k: string]: number;
        };
        fairShareWeights: {
            [agentId: string]: number;
        };
        agingFactor: number;
        lastResetTime: number;
    };
    /**
     * Reset scheduler state
     */
    reset(): void;
    /**
     * Update configuration
     */
    updateConfig(newConfig: Partial<JobSchedulerConfig>): void;
}
//# sourceMappingURL=JobScheduler.d.ts.map