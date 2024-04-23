import { MoreOutlined } from "@ant-design/icons";
import NiceModal from "@ebay/nice-modal-react";
import { useMount } from "ahooks";
import { App, Button, Dropdown, MenuProps } from "antd";
import { useQueryClient } from "react-query";
import { useStore } from "../../stores/useStore";
import { CreateSubdirModal } from "../modals/CreateSubdirModal";

export const MenuDropdown = () => {
	const { message } = App.useApp();
	const client = useQueryClient();

	const { setExpandedKeys, setAutoExpandParent } = useStore();

	useMount(() => {
		NiceModal.register("CreateSubdirModal", CreateSubdirModal);
	});

	const onClick = (expandedKeysValue: React.Key[]) => {
		setExpandedKeys(expandedKeysValue);
		setAutoExpandParent(true);
	};

	const items: MenuProps["items"] = [
		{
			key: "add_task",
			label: "新建任务",
		},
		{
			key: "add_dir",
			label: "新建子目录",
			onClick: () => NiceModal.show("CreateSubdirModal"),
		},
		{
			key: "fold_file",
			label: "收起所有文件夹",
			onClick: () => onClick([]),
		},
		{
			key: "refresh",
			label: "刷新",

			// TODO: invalidateQueries 需要传入请求的key
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
	];

	return (
		<Dropdown menu={{ items }}>
			<Button type="text" shape="circle" icon={<MoreOutlined />}></Button>
		</Dropdown>
	);
};
