
 import {IExtension} from "aixui";
 import {RssExtension} from "~/extensions/rss/RssExtension.tsx";
 import {ActionsExtension} from "~/extensions/actions";

// 所有extendsion的入口集合
const extensions: IExtension[] = [
    ActionsExtension,//快捷键绑定
    RssExtension,//rss管理
    // new FolderTreeExtension(),
    // GithubVscodeTheme, // GithubVscodeTheme 主题
    // OneDarkPro, // OneDarkPro 主题
    // DataDevExtension, // 数据开发
    // TaskTemplateExtension, // 任务模板
    // TemporaryQueryExtension, // 临时查询
    // ResourceLibExtension, // 资源库
    // EditorExtension, // 编辑器
    // PanelExtension, // 输出面板
    // MoreExtension, // 更多
    // FunctionLibExtension, // 函数库
    // RecycleBinExtension, // 回收站
    // MetaDataExtension, // 元数据
    // InitSomethingExtension, // 初始化主题、语言、用户信息等
    // ActionsExtension, // 快捷键
    // ComfirmExtension, // 提示用户操作相关的拓展。字面量形式，所以不需要实例化
]

export default extensions;