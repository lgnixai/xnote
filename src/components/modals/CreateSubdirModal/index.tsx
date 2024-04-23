import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;
const { Text } = Typography;

// 对话框：新建子目录
export const CreateSubdirModal = NiceModal.create(({ data }: any) => {
	const [form] = useForm();
	const modal = useModal();

	return (
		<Modal
			centered
			destroyOnClose
			width="40%"
			title="新建子目录"
			okText="确定"
			cancelText="取消"
			maskClosable={false}
			open={modal.visible}
			onOk={modal.remove}
			onCancel={modal.remove}
		>
			<Form
				form={form}
				colon={false}
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 18 }}
			>
				{/* TODO 不清楚目录名称的字段是name？title？localtion？ */}
				<Item
					required
					name="title"
					label="目录名称"
					rules={[{ required: true, message: "请输入目录名" }]}
				>
					<Input placeholder="请输入目录名称" />
				</Item>
				<Item name="location" label="当前目录">
					<Text>任务开发/{data?.location}</Text>
				</Item>
			</Form>
		</Modal>
	);
});
