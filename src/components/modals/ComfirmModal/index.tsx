import molecule from "@dtinsight/molecule";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Button, Modal } from "antd";

// 弹窗：提示用户保存数据
export const ComfirmModal = NiceModal.create(
	({ data, tabId, groupId }: any) => {
		const modal = useModal();
		return (
			<Modal
				centered
				title="温馨提示"
				open={modal.visible}
				onCancel={modal.remove}
				footer={
					<>
						<Button onClick={modal.remove}>取消</Button>
						<Button
							danger
							type="primary"
							onClick={() => {
								modal.remove();
								molecule.editor.closeTab(tabId, groupId);
							}}
						>
							直接离开
						</Button>
					</>
				}
			>
				当前内容未保存，确定要离开吗？
			</Modal>
		);
	}
);
