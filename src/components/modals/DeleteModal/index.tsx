import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useBoolean } from "ahooks";
import { Button, Input, Modal, Space, Typography } from "antd";

const { Text } = Typography;

export const DeleteModal = NiceModal.create(({ data }: any) => {
	const modal = useModal();
	const title = !!data.children ? "删除目录" : "删除任务";
	const [state, { setTrue, setFalse }] = useBoolean(true);
	return (
		<Modal
			centered
			destroyOnClose
			title={title}
			open={modal.visible}
			onCancel={() => modal.remove()}
			footer={
				<Space>
					<Button onClick={modal.remove}>取消</Button>
					<Button danger type="primary" disabled={state} onClick={modal.remove}>
						确定
					</Button>
				</Space>
			}
		>
			<div>
				<Text>
					请输入确认名称： {`${data.title}`} 以确认您了解此操作的风险。
				</Text>
				<Input
					style={{ marginTop: "10px" }}
					onChange={(e) => {
						e.target.value === data.title ? setFalse() : setTrue();
					}}
					placeholder={data.tile}
				/>
			</div>
		</Modal>
	);
});
