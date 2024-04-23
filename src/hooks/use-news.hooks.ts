import {atom, useAtom, useAtomValue} from 'jotai';
import { useRef, useEffect } from 'react';

import {   messageHistoryAtom } from '~/atoms/app.atoms';
import {useQuery} from "@tanstack/react-query";
export const selectedNewsAtom = atom<string | null>(null);

export const useNews = () => {

    const [messages, setMessages] = useAtom(messageHistoryAtom);
    // const {isPending, error, data} = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch('http://127.0.0.1:6677/api/feeds').then((res) =>
    //             res.json(),
    //         ),
    // })

    useEffect(() => {
        fetch("http://127.0.0.1:6677/api/feeds")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setMessages(data))
    },[])
    // if (isPending) return 'Loading...'
    //
    // if (error) return 'An error has occurred: ' + error.message
    //
    // // reset history on exchange change
    // // we might have different symbols / price on different exchanges
    // useEffect(() => {
    //
    //         setMessages(data);
    //
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [data]);

    return { messages };
};