import styled from 'styled-components';
import { InputForm } from '../../utils/mixins';
import arrows from '../../assets/arrows.svg';

export const Select = styled.select`
	${InputForm};
	appearance: none;
  background: #fff url(${arrows}) center right 1rem/1rem no-repeat !important;
`;
