import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

export const TaskTemplateModal = NiceModal.create(() => {
	const [form] = useForm();
	const modal = useModal();
	return (
		<Modal
			centered
			destroyOnClose
			width="40%"
			title="新建任务模板"
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
				<Item
					required
					label="模板名称"
					rules={[{ required: true, message: "请输入模板名" }]}
				>
					<Input placeholder="请输入模板名称" />
				</Item>
				<Item label="模板描述">
					<Input placeholder="请输入模板描述" />
				</Item>
				<Item required label="保存至">
					<Select />
				</Item>
				<Item label="支持任务类型">
					<Select />
				</Item>
			</Form>
		</Modal>
	);
});
