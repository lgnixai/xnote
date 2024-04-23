
import { QuickRunSQLAction } from "./quickRunSQLAction";
import {IExtension, IMoleculeContext} from "aixui";

// 快捷键
export const ActionsExtension: IExtension = {
    id: 'keybinding',
    name: '快捷键',

    activate(molecule: IMoleculeContext): void {
        molecule.action.registerAction(QuickRunSQLAction); // 注册自定义快捷键：执行SQL
    },


}

