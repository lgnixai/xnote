export type Feeds ={
    id: number;
    title: string;
    folder_id: string;
    description: string;
    link: string;
    feed_link: string;
    has_icon: boolean;
}

 export interface FeedsItem {
    id: number;
    title: string;
    feed_id: string;
    content: string;
    link: string;
}
