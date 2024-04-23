import {atom, useAtom, useAtomValue} from 'jotai';
import {contentAtom, feedsItemAtom} from "~/atoms/app.atoms.ts";
import {useEffect} from "react";
import {selectedNewsAtom} from "~/hooks/use-feed.hooks.ts";


export const selContentAtom = atom<number | null>(1467);

export const useContent = () => {
    const setSelected = useAtomValue(selContentAtom);
    const [messages, setMessages] = useAtom(contentAtom);


    useEffect(() => {
        fetch(`http://127.0.0.1:6677/api/items/${setSelected}`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setMessages(data))
    },[setSelected])


    return { messages };

};