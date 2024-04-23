import {useSetAtom} from 'jotai';

import {selectedNewsAtom} from "~/hooks/use-news.hooks.ts";
import rss from "~/assets/rss.svg";

type FeedsProps = {
    id: number;
    folder_id: string;
    title: string;
    description: string;
    feed_link: string;
    link?: string;
    has_icon?: boolean;
};

export const FeedsComponent = (props: FeedsProps) => {
    const setSelected = useSetAtom(selectedNewsAtom);
    // let  logo=rss
    // if(!props.has_icon){
    //     logo=`http://localhost:6677/api/feeds/${props.id}/icon`
    // }else{
    //     logo= {rss}
    // }

    return (
        <div className="px-1 py-1" onClick={() => setSelected(props.id)}>

             {props.title}


        </div>
    );
};
