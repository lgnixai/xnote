
import { message } from 'antd';
import {KeybindingWeight} from "aixui";
import {BaseAction} from "aixui/esm/glue";
import {KeyChord,KeyMod,KeyCode} from "aixui/esm/monaco";

export class QuickRunSQLAction extends BaseAction {
    static readonly ID = 'RunSQL';
    static readonly LABEL = 'Execute SQL';
    static readonly DESC = 'Run SQL';

    constructor() {
        super({
            id: QuickRunSQLAction.ID,
            title: {
                value: QuickRunSQLAction.LABEL,
                original: QuickRunSQLAction.DESC,
            },
            label: QuickRunSQLAction.LABEL,
            alias: QuickRunSQLAction.DESC,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyK),
            },

        });
    }

    run() {
        message.open({
            key: `success_save`,
            type: "success",
            content: "模拟运行成功",
        })
    }
}
