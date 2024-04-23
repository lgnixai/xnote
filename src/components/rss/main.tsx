import {Allotment} from "allotment";

import "allotment/dist/style.css";

import FeedsComponent from "./feeds.tsx";
import {useAtom} from "jotai/index";
import {selContentAtom} from "~/hooks/use-content.hooks.ts";
import {useAtomValue} from "jotai";
import ContentComponent from "~/components/rss/content.tsx";

export default function MainPane() {
    const content=useAtomValue(selContentAtom)

    return (
        <Allotment defaultSizes={[170, 500]}>
            <Allotment.Pane key="side" minSize={170} maxSize={800}>
                <FeedsComponent/>
            </Allotment.Pane>
            <Allotment.Pane key="side2">
              <ContentComponent/>
            </Allotment.Pane>

        </Allotment>
    )
}