import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;
const { Text } = Typography;

// 对话框：重命名
export const RenameModal = NiceModal.create(({ data }: any) => {
	const [form] = useForm();
	const modal = useModal();
	return (
		<Modal
			centered
			destroyOnClose
			width="40%"
			title="重命名"
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
				initialValues={data}
			>
				<Item required name="title" label="当前任务名">
					<Input placeholder="请输入模板名称" />
				</Item>
				<Item name="location" label="当前目录">
					<Text>任务开发/{data?.location}</Text>
				</Item>
			</Form>
		</Modal>
	);
});
