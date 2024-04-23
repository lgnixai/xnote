import {atom, useAtom, useAtomValue} from 'jotai';
import {  useEffect } from 'react';

import {feedsItemAtom} from '~/atoms/app.atoms';

export const selectedNewsAtom = atom<number | null>(1);

export const useFeeds = () => {
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


    return { messages };

};