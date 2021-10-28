export interface ITicketComponent {
    ticket: number;
}

export interface IQueueComponent {
    queue: number[];
}

export interface IQueueRowContainer extends IQueueComponent {
    id: number;
    ticket?: string | null;
    statusMode?: boolean;
}

export interface IEditQueueProps {
    id: number;
    queue: number[];
    isOpenEdit: boolean;
}

export interface QueueType {
    id: number;
    queue: number[];
}