import {Allotment} from "allotment";
import "allotment/dist/style.css";


import SideComponent from "~/pages/RssPanel/side.component.tsx";
import ContentComponent from "~/pages/RssPanel/content.component.tsx";

export default function MainPane() {

    return (
        <Allotment defaultSizes={[170, 500]}>
            <Allotment.Pane key="side" minSize={170} maxSize={800}>
                <SideComponent/>
            </Allotment.Pane>
            <Allotment.Pane key="content">
              <ContentComponent/>
            </Allotment.Pane>

        </Allotment>
    )
}