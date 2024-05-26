import { Input } from 'baseui/input';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 6rem 4rem;
	color: white;
	border-radius: 1rem;
	box-shadow: 0 2px 8px rgba(15, 15, 15, 0.6);
	background-color: #1c1c1c;
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 1rem 0;
`;

const StyledInput = styled(Input)`
	width: 100%;
	margin-bottom: 20em !important;
`;

export { Container, InnerContainer, InputWrapper, StyledInput };
