import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Form, Input, Modal, TreeSelect } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

const treeData = [
	{
		title: "Node1",
		value: "0-0",
		children: [
			{
				title: "Child Node1",
				value: "0-0-1",
			},
			{
				title: "Child Node2",
				value: "0-0-2",
			},
		],
	},
	{
		title: "Node2",
		value: "0-1",
	},
];

// 对话框：复制
export const CopyModal = NiceModal.create(({ data }: any) => {
	const [form] = useForm();
	const modal = useModal();

	return (
		<Modal
			centered
			destroyOnClose
			width="40%"
			title="复制"
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
				<Item
					name="title"
					label="当前任务名"
					rules={[{ required: true, message: "请输入任务名" }]}
				>
					<Input />
				</Item>
				<Item
					required
					name="location"
					label="选择目录"
					rules={[{ required: true, message: "请选择目录" }]}
				>
					<TreeSelect
						style={{ width: "100%" }}
						value={treeData}
						dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
						treeData={treeData}
						placeholder="请选择目录"
						treeDefaultExpandAll
					/>
				</Item>
			</Form>
		</Modal>
	);
});
