import cx from 'clsx';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import Mousetrap from 'mousetrap';
import React, {useEffect, useRef, useState} from 'react';
import {BiTrash} from 'react-icons/bi';
import {FaLock} from 'react-icons/fa';
import {TiDelete} from 'react-icons/ti';
import {Tooltip} from 'react-tooltip';
import type {VirtuosoHandle} from 'react-virtuoso';
import {Virtuoso} from 'react-virtuoso';
import {selectedNewsAtom, useNews} from "~/hooks/use-news.hooks.ts";
import {LoadingComponent} from "~/ui/loading.component.tsx";
import {ArticleComponent} from "~/components/article/article.component.tsx";
import {useFeeds} from "~/hooks/use-feed.hooks.ts";
import {feedsItemAtom, messageHistoryAtom} from "~/atoms/app.atoms.ts";
import {selContentAtom} from "~/hooks/use-content.hooks.ts";


const FeedsComponent = () => {
    const virtuoso = useRef<VirtuosoHandle>(null);
    const [loaded, setLoaded] = useState(false);

    const [content,setContent]=useAtom(selContentAtom)
    const setSelected = useAtomValue(selectedNewsAtom);
    const [messages, setMessages] = useAtom(feedsItemAtom);
    // const {isPending, error, data} = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch('http://127.0.0.1:6677/api/feeds').then((res) =>
    //             res.json(),
    //         ),
    // })

    useEffect(() => {
        fetch(`http://127.0.0.1:6677/api/items?feed_id=${setSelected}&status=unread`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setMessages(data.list))
    },[setSelected])
    const ChangeContent=(content:any)=>{
        //console.log(content)
        setContent(content)
    }
    return (
        <div className="w-full h-full relative">asdfasdf
            {messages.length}
            {messages.length > 0 && (
                <button
                    type="button"
                    className="absolute bottom-3 left-3 z-50 bg-dark-bg w-8 h-8 flex items-center justify-center rounded-full group cursor-pointer shadow-md shadow-dark-bg/70"

                >
                    <BiTrash className="text-dark-border-gray-2 group-hover:text-dark-text-white transition-colors"/>
                </button>
            )}
            <div className="h-[calc(100%-44px)]">
                <Virtuoso
                    ref={virtuoso}
                    data={messages}
                    totalCount={messages.length}
                    className="no-scrollbar"
                    itemContent={(_index, item) => (
                        <div onClick={() => ChangeContent(item.id)}>{item.title}</div>

                    )}
                />
            </div>
        </div>
    );
};
export default FeedsComponent