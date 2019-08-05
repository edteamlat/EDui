import styled,{ css } from 'styled-components';

export const Paper = styled.div`
	background: steelblue;
	${props => !props.height && css`height: 150px`};
	color: #fff;
	line-height: 150px;
	font-size: 1.3rem;
	text-align: center;
`;
