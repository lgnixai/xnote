import {
	FolderOpenOutlined,
	FolderOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";
import molecule from "@dtinsight/molecule";
import NiceModal from "@ebay/nice-modal-react";
import { useMount } from "ahooks";
import { App, Dropdown, Flex, MenuProps, Tree } from "antd";
import { useQueryClient } from "react-query";
import { useFolderData } from "../../hook/useFolderTree";
import { useStore } from "../../stores/useStore";
import { transformToEditorTab } from "../../utils";
import { CopyModal } from "../modals/CopyModal";
import { CreateSubdirModal } from "../modals/CreateSubdirModal";
import { DeleteModal } from "../modals/DeleteModal";
import { MoveModal } from "../modals/MoveModal";
import { RenameModal } from "../modals/RenameModal";

const { DirectoryTree } = Tree;

export const DTTree = () => {
	const { message } = App.useApp();
	const client = useQueryClient();

	const {
		expandedKeys,
		setExpandedKeys,
		autoExpandParent,
		setAutoExpandParent,
		selectedTreeData,
		setSelectedTreeData,
	} = useStore();

	// 获取数据

	const { data, isFetching } = useFolderData();

	useMount(() => {
		NiceModal.register("MoveModal", MoveModal); // 注册移动对话框
		NiceModal.register("CopyModal", CopyModal); // 注册复制对话框
		NiceModal.register("DeleteModal", DeleteModal); // 注册删除对话框
		NiceModal.register("RenameModal", RenameModal); // 注册重命名对话框
		NiceModal.register("CreateSubdirModal", CreateSubdirModal); // 注册新建子目录对话框
	});

	const items: MenuProps["items"] =
		selectedTreeData.fileType !== "File"
			? [
					{
						label: "新建任务",
						key: "create_folder_task",
					},
					{
						label: "新建子目录",
						key: "create_folder_subfolder",
						onClick: () =>
							NiceModal.show("CreateSubdirModal", { data: selectedTreeData }),
					},
					{
						label: "移动",
						key: "move_folder",
						onClick: () =>
							NiceModal.show("MoveModal", { data: selectedTreeData }),
					},
					{
						label: "重命名",
						key: "rename_folder",
						onClick: () =>
							NiceModal.show("RenameModal", { data: selectedTreeData }),
					},
					{
						label: "删除",
						key: "delete_folder",
						onClick: () =>
							NiceModal.show("DeleteModal", { data: selectedTreeData }),
					},
					{
						label: "刷新",
						key: "refresh_folder",
						onClick: () =>
							client
								.invalidateQueries("")
								.then(() =>
									message.open({
										key: `success${""}`,
										type: "success",
										content: "刷新成功",
									})
								)
								.catch(() =>
									message.open({
										key: `error${""}`,
										type: "error",
										content: "刷新失败",
									})
								),
					},
			  ]
			: [
					{
						label: "重命名",
						key: "rename_file",
						onClick: () =>
							NiceModal.show("RenameModal", { data: selectedTreeData }),
					},
					{
						label: "删除",
						key: "delete-file",
						onClick: () =>
							NiceModal.show("DeleteModal", { data: selectedTreeData }),
					},
					{
						label: "复制",
						key: "copy_file",
						onClick: () =>
							NiceModal.show("CopyModal", { data: selectedTreeData }),
					},
					{
						label: "移动",
						key: "move_file",
						onClick: () =>
							NiceModal.show("MoveModal", { data: selectedTreeData }),
					},
					{
						label: "操作日志",
						key: "operation_log",
						disabled: true,
					},
			  ];

	// 点击事件
	const onSelect = (e: any, record: any) => {
		if (!record.children) {
			const tabData = transformToEditorTab(record);
			molecule.editor.open(tabData);
		}
	};

	const onExpand = (expandedKeysValue: React.Key[]) => {
		setExpandedKeys(expandedKeysValue);
		setAutoExpandParent(false);
	};
	return (
		<Dropdown menu={{ items }} trigger={["contextMenu"]}>
			<div
				style={{
					background:
						molecule.colorTheme.getColorTheme().colors?.["sideBar.background"],
					height: "100vh",
					lineHeight: "100%",
				}}
			>
				{isFetching ? (
					<Flex justify="center">loading...</Flex>
				) : (
					<DirectoryTree
						multiple
						defaultExpandAll // 默认展开所有
						treeData={data} // 文件树 data 数据
						onExpand={onExpand} // 展开事件
						expandedKeys={expandedKeys} // 展开的key
						autoExpandParent={autoExpandParent} // 自动展开父节点
						onClick={onSelect} // 点击事件
						onRightClick={({ event, node }) => {
							setSelectedTreeData(node); // 设置选中的数据
						}}
						icon={(record: any) => {
							if (record.isLeaf) {
								// TODO 在这里判断文件图标
								// if (record.title.includes("1")) {
								// 	return <SparkSQLIcon style={{ color: "#519aba" }} />;
								// }
								return <PlayCircleOutlined />;
							}
							return record.expanded ? (
								<FolderOpenOutlined />
							) : (
								<FolderOutlined />
							);
						}}
					/>
				)}
			</div>
		</Dropdown>
	);
};
