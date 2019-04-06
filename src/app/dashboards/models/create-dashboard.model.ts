export interface CreateDashboardModel {
    userId: number;
    link: string;
    processingTime: number;
    updatePeriod: number;
    isLikes: boolean;
    isViews: boolean;
    isComments: boolean;
    isCommentsMood: boolean;
}
