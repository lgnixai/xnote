/** @jsxImportSource @emotion/react */
import { Avatar, Card, Tooltip } from "antd";
import { css } from "@emotion/react";

const { Meta } = Card;

interface MenuCardProps {
	icon?: string;
	title?: string;
	description?: string;
}

// 创建 CSS 样式对象
const ellipsisStyle = css`
	display: -webkit-box;
	-webkit-line-clamp: 2; /* 限制最多显示的行数 */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis; /* 支持多行文本的省略号 */
`;

const AVATAR = "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2";

export const MenuCard = ({
	icon = AVATAR,
	title,
	description,
}: MenuCardProps) => {
	return (
		<Tooltip title={description} placement="bottom">
			<Card hoverable>
				<Meta
					avatar={<Avatar size="large" src={icon} />}
					title={title}
					description={<div css={ellipsisStyle}>{description}</div>}
				/>
			</Card>
		</Tooltip>
	);
};
