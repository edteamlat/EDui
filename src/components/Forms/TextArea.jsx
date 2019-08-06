import styled from 'styled-components';
import { InputForm } from '../../utils/mixins/input';

export const TextArea = styled.textarea`
	${InputForm};
	min-height : 6em;
  max-height : 6em;
  max-width  : 100%;
	min-width  : 100%;
`;
