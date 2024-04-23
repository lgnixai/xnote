import { AppleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import {
	Button,
	Col,
	Divider,
	Drawer,
	Input,
	Menu,
	MenuProps,
	Row,
	Space,
	Typography,
} from "antd";
import { MenuCard } from "../Cards/MenuCard";

const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem => {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
};

const items: MenuProps["items"] = [
	getItem(
		"我的收藏",
		"grp",
		null,
		[
			getItem("数据开发", "数据开发", <AppleOutlined />),
			getItem("数据地图", "数据地图", <AppleOutlined />),
			getItem("数据质量", "数据质量", <AppleOutlined />),
			getItem("数据安全", "数据安全", <AppleOutlined />),
			getItem("租户控制台", "租户控制台", <AppleOutlined />),
			getItem("SLA治理", "SLA治理", <AppleOutlined />),
			getItem("治理门户", "治理门户", <AppleOutlined />),
			getItem("数据服务", "数据服务", <AppleOutlined />),
			getItem("指标平台", "指标平台", <AppleOutlined />),
			getItem("值班管理", "值班管理", <AppleOutlined />),
		],
		"group"
	),
];

const SmallMarginDivider = styled(Divider)`
	margin: 12px 0;
`;

export const MenuDrawer = ({ onClose, open, onClick }: any) => {
	return (
		<Drawer
			height="85vh"
			title="DataWeave 全部产品"
			placement="bottom"
			onClose={onClose}
			open={open}
		>
			<Row gutter={24}>
				<Col span={4}>
					<Menu
						mode="inline"
						items={items}
						onClick={onClick}
						selectable={false}
					/>
				</Col>
				<Col span={20}>
					<Row justify="space-between">
						<Space>
							<Text>LOGO</Text>
							<Button type="link">前往租户控制台</Button>
						</Space>
						<Input style={{ width: 200 }} placeholder="输入关键词搜索" />
					</Row>

					<Row gutter={36}>
						<Col span={6}>
							<Text>数据研发</Text>
							<SmallMarginDivider />
							<Space direction="vertical" size={16}>
								<MenuCard
									title="数据开发"
									description="一体化集成批式、流式数据开发能力，提供一站式全链路研发体验。"
								/>
								<MenuCard
									title="数据服务"
									description="提供API创建、发布、共享、管理和运维的全生命周期管理能力，统一数据服务出口，实现数据应用价值最大化"
								/>
							</Space>
						</Col>
						<Col span={6}>
							<Text>数据资产</Text>
							<SmallMarginDivider />
							<Space direction="vertical" size={16}>
								<MenuCard
									title="数据地图"
									description="收集和展示全链路元数据，帮助数据消费者解决找、理解、应用数据难的痛点，提升数据价值。"
								/>
								<MenuCard
									title="指标平台"
									description="集成指标管理，指标计算，指标应用，解决指标定义、生产、出口的一致性问题。"
								/>
							</Space>
						</Col>
						<Col span={6}>
							<Text>数据治理</Text>
							<SmallMarginDivider />
							<Space direction="vertical" size={16}>
								<MenuCard
									title="治理门户"
									description="一站式的数据治理产品解决方案，覆盖规划-执行-反馈全生命周期的治理流程"
								/>
								<MenuCard
									title="数据安全"
									description="数据权限的控制、风险与审计、数据保护，全方位保障大数据资产安全。"
								/>
								<MenuCard
									title="数据质量"
									description="提供数据探查、数据监控与数据对比能力，保障数据质量。"
								/>
							</Space>
						</Col>
						<Col span={6}>
							<Text>数据治理</Text>
							<SmallMarginDivider />
							<Space direction="vertical" size={16}>
								<MenuCard
									title="SLA治理"
									description="提供SLA在线化申报与签署，并通过多种治理保障措施，协同提高全链路数据质量。"
								/>
							</Space>
						</Col>
					</Row>

					<Text>通用</Text>
					<SmallMarginDivider />
					<Row gutter={36}>
						<Col span={6}>
							<MenuCard title="值班管理" />
						</Col>
					</Row>
				</Col>
			</Row>
		</Drawer>
	);
};
