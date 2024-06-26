import cx from 'clsx';
import classes from "./style.module.scss"
import React, {useEffect, useRef, useState} from 'react';
import {BiTrash} from 'react-icons/bi';

import {TiDelete} from 'react-icons/ti';

import type {VirtuosoHandle} from 'react-virtuoso';
import {Virtuoso} from 'react-virtuoso';
import {selectedNewsAtom, useNews} from "~/hooks/use-news.hooks.ts";
import {LoadingComponent} from "~/ui/loading.component.tsx";
import {ArticleComponent} from "~/components/article/article.component.tsx";
import {FeedsComponent} from "~/pages/RssPanel/feeds.component.tsx";
import {Group, ScrollArea} from "@mantine/core";
import Icon from "antd/es/icon";
import {useSetAtom} from "jotai/index";


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
        <ScrollArea
            classNames={{
                viewport: classes.viewport,
            }}
            style={{
                position: "absolute",
                inset: 12,
                top: 42,
            }}>
            {messages.map((item) => {

                return (
                    <Group
                        py="xs"
                        px="xs"
                        noWrap
                        spacing={6}

                    >



                        <FeedsComponent
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            feed_link={item.feed_link}
                            folder_id={item.folder_id}/>





                    </Group>
                );
            })}
        </ScrollArea>
    );
};
export default RssPanel