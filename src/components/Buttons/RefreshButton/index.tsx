import { UndoOutlined } from "@ant-design/icons";
import { App, Button } from "antd";
import { useQueryClient } from "react-query";

// 刷新按钮
export const RefreshButton = ({ catchKey }: { catchKey: string }) => {
	const { message } = App.useApp();
	const client = useQueryClient();

	return (
		<Button
			type="text"
			shape="circle"
			icon={<UndoOutlined />}
			onClick={() =>
				client
					.invalidateQueries(catchKey)
					.then(() =>
						message.open({
							key: `success${catchKey}`,
							type: "success",
							content: "刷新成功",
						})
					)
					.catch(() =>
						message.open({
							key: `error${catchKey}`,
							type: "error",
							content: "刷新失败",
						})
					)
			}
		/>
	);
};
