 import molecule from "@dtinsight/molecule";
 import {IExtension, IMoleculeContext} from "aixui";
import { ActionService } from "aixui/esm/services/action";
import { AuxiliaryBarService } from "aixui/esm/services/auxiliaryBar";
import { BuiltinService } from "aixui/esm/services/builtin";
import { ColorThemeService } from "aixui/esm/services/colorTheme";
import { ContextMenuService } from "aixui/esm/services/contextMenu";
import { EditorService } from "aixui/esm/services/editor";
import { EditorTreeService } from "aixui/esm/services/editorTree";
import { ExplorerService } from "aixui/esm/services/explorer";
import { FolderTreeService } from "aixui/esm/services/folderTree";
import { LayoutService } from "aixui/esm/services/layout";
import { LocaleService } from "aixui/esm/services/locale";
import { MenuBarService } from "aixui/esm/services/menuBar";
import { NotificationService } from "aixui/esm/services/notification";
import { OutputService } from "aixui/esm/services/output";
import { PanelService } from "aixui/esm/services/panel";
import { SearchService } from "aixui/esm/services/search";
import { SettingsService } from "aixui/esm/services/setting";
import { StatusBarService } from "aixui/esm/services/statusBar";
 import {ID_COLLECTIONS} from "~/constant";
 import {rssActivityBar} from "~/extensions/rss/base.tsx";
 // import { IExtension } from "@dtinsight/molecule/esm/model";
 // import { IExtensionService } from "@dtinsight/molecule/esm/services";
 // import { Button } from "antd";
 // import { ID_COLLECTIONS, OPERATIONS } from "../constant";
 // import { EditorEntry } from "../pages/EditorEntry";
 // import { dataDevActivityBar } from "./dataDev/base";
 // import { MoreActivityBar } from "./more/base";
 //
 // const initEntry = () => {
 // 	// 设置编辑器的入口页
 // 	molecule.editor.setEntry(<EditorEntry />);
 // };

 const initActive = (molecule:any) => {
	// 默认选中的ActivityBar选项
	 molecule.activityBar.setCurrent(ID_COLLECTIONS.RSS_ID);
	 // 默认选中的Siderbar选项
	 molecule.sidebar.setCurrent(rssActivityBar.id);
};

const initMenuBar = () => {

};

export const InitSomethingExtension: IExtension = {
	id: "INIT_SOMETHING_ID",
	name: "初始化操作",

	activate(molecule: IMoleculeContext): void {

		//initEntry(); // 初始化编辑器入口页
		initActive(molecule); // 初始化活动栏
		initMenuBar(); // 初始化菜单栏
	},


};
