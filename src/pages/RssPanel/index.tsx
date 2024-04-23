import cx from 'clsx';

import React, {useEffect, useRef, useState} from 'react';
import {BiTrash} from 'react-icons/bi';

import {TiDelete} from 'react-icons/ti';

import type {VirtuosoHandle} from 'react-virtuoso';
import {Virtuoso} from 'react-virtuoso';
import {useNews} from "~/hooks/use-news.hooks.ts";
import {LoadingComponent} from "~/ui/loading.component.tsx";
import {ArticleComponent} from "~/components/article/article.component.tsx";


const RssPanel = () => {
    const virtuoso = useRef<VirtuosoHandle>(null);
    const [loaded, setLoaded] = useState(false);

    // @ts-ignore
    const {messages} = useNews();

    // const [selected, setSelected] = useAtom(selectedNewsAtom);
    // const [search, setSearch] = useAtom(newsSearchAtom);
    // const setNewsHistory = useSetAtom(messageHistoryAtom);

    // const clear = () => {
    //     setNewsHistory([]);
    //     setSelected(null);
    // };

    const handleKeyDown = ({
                               key,
                               currentTarget,
                           }: React.KeyboardEvent<HTMLInputElement>) => {
        if (key === 'Escape') {
            // setSearch('');
            currentTarget.blur();
        }
    };

    // useEffect(() => {
    //     const idx = messages.findIndex((m) => m.id === selected);
    //     if (idx !== -1 && virtuoso.current) {
    //         virtuoso.current.scrollIntoView({
    //             index: idx,
    //             align: 'start',
    //         });
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [selected]);

    useEffect(() => {
        if (messages.length > 0 && !loaded) {
            setLoaded(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages.length]);

    if (!loaded && messages.length === 0) {
        return <LoadingComponent/>;
    }

    if (loaded && messages.length === 0) {
        return (
            <div className="w-full text-center animate-pulse mt-8 font-bold text-lg">
                Waiting for news...
            </div>
        );
    }

    return (
        <div className="w-full h-full relative">
            <div className="p-1 relative">
                <input
                    id="news-search"
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-dark-bg"

                    onKeyDown={handleKeyDown}
                    // onChange={(e) => setSearch(e.currentTarget.value)}
                />
                <span
                    className={cx(
                        'absolute cursor-pointer right-2 top-3 opacity-70 hover:opacity-100 transition-opacity',
                    )}
                >
          <TiDelete className="text-lg"/>
        </span>
            </div>
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
                        <ArticleComponent
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            feed_link={item.feed_link}
                            folder_id={item.folder_id}/>
                    )}
                />
            </div>
        </div>
    );
};
export default RssPanel