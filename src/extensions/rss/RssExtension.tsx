import { IExtension, IMoleculeContext,} from 'aixui';

import {rssActivityBar, rssSiderPanel} from "~/extensions/rss/base.tsx";
import MainPane from "~/pages/RssPanel/main.component.tsx";

export const RssExtension: IExtension = {
    id: 'NoteExtension',
    name: 'NoteExtension',
    // contributes: {
    //     [IContributeType.Modules]: {
    //         menuBar: import('../../components/menuBar.tsx'),
    //     },
    // },
    activate(molecule: IMoleculeContext) {

        molecule.layout.setPanel(false)
        molecule.layout.setAuxiliaryBar(false)

        molecule.editor.setEntry(<MainPane/>);
        //rss
        molecule.activityBar.add(rssActivityBar);
        molecule.sidebar.add(rssSiderPanel);
        molecule.activityBar.onClick((item) => {
            console.log(item.id,molecule.activityBar.getCurrent())
            molecule.editor.closeAll();
            molecule.editor.setEntry(<MainPane/>);
            if (item.id === molecule.activityBar.getCurrent()) {

                molecule.editor.setEntry(<MainPane/>);
            } else {

            }
        });
    }
};
