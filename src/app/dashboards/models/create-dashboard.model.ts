export interface CreateDashboardModel {
    userId: string;
    link: string;
    processingTime: number;
    updatePeriod: number;
    isLikes: boolean;
    isViews: boolean;
    isComments: boolean;
    isCommentsMood: boolean;
}
