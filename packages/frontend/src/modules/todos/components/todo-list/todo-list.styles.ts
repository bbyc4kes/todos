import { css } from '@emotion/css';

export const containerStyles = css`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #f8f9fa;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const headingStyles = css`
	font-size: 24px;
	margin-bottom: 20px;
`;

export const listStyles = css`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, auto);
	gap: 10px;
	padding: 0;
	list-style: none;
`;

export const formStyles = css`
	margin-top: 20px;
`;
