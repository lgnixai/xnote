import {ID_COLLECTIONS} from "../../constant";

import {IActivityBarItem} from "aixui";
import {ISidebarPane} from "aixui/esm/models/sideBar";
import RssPanel from "~/pages/RssPanel";


const RECOURCE_NAME = "悦阅";

const rssActivityBar: IActivityBarItem = {
    alignment: "top",
    id: ID_COLLECTIONS.RSS_ID,
    sortIndex: -1,
    name: RECOURCE_NAME,
    title: RECOURCE_NAME,
    icon: "code"
};

const rssSiderPanel: ISidebarPane = {
    id: rssActivityBar.id,
    title: RECOURCE_NAME,
    render: () => <RssPanel/>,
};

export {rssActivityBar, rssSiderPanel};
