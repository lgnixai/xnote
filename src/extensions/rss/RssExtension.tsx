import {IContributeType, IExtension, IMoleculeContext,} from 'aixui';

import {rssActivityBar, rssSiderPanel} from "~/extensions/rss/base.tsx";

export const RssExtension: IExtension = {
    id: 'NoteExtension',
    name: 'NoteExtension',
    contributes: {
        [IContributeType.Modules]: {
            menuBar: import('../../components/menuBar.tsx'),
        },
    },
    activate(molecule: IMoleculeContext) {

        molecule.layout.setPanel(false)
        //rss
        molecule.activityBar.add(rssActivityBar);
        molecule.sidebar.add(rssSiderPanel);
    }
};
