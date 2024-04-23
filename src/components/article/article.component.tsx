import cx from 'clsx';
import dayjs from 'dayjs';
import {useAtomValue, useSetAtom} from 'jotai';
import {take} from 'lodash';
import React from 'react';
import {AiOutlineInbox, AiOutlineSend} from 'react-icons/ai';
import {selectedNewsAtom} from "~/hooks/use-news.hooks.ts";

type ArticleComponentProps = {
    id: number;
    folder_id: string;
    title: string;
    description: string;
    feed_link: string[];

    link?: string;

    has_icon?: boolean;
};

export const ArticleComponent = (props: ArticleComponentProps) => {
    const setSelected = useSetAtom(selectedNewsAtom);


    return (
        <div className="px-1 py-1" onClick={() => setSelected(props.id)}>

            <div className="text-pink-300 font-bold uppercase mb-1">
                {props.title}
            </div>

        </div>
    );
};
