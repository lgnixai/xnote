import {useContent} from "~/hooks/use-content.hooks.ts";
import {contentAtom} from "~/atoms/app.atoms.ts";
import {useNews} from "~/hooks/use-news.hooks.ts";

import ReactHtmlParser from 'react-html-parser';

const ContentComponent = () => {
   // const content=useContent()
    const {messages} = useContent();

     return (
        <div className="w-full h-full relative">asdfasdf
            {ReactHtmlParser(messages.content)}
        </div>
    );
};
export default ContentComponent