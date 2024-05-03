import { css } from '@emotion/css';

export const listItemStyles = css`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: solid;
	padding: 2rem;
	border-width: 2px;
	border-radius: 8px;
`;

export const titleStyles = css`
	font-size: 24px;
	margin-bottom: 8px;
`;

export const descriptionStyles = css`
	font-size: 18px;
	margin-bottom: 8px;
`;

export const buttonStyles = css`
	padding: 8px 16px;
	margin-right: 8px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #0056b3;
	}
`;
