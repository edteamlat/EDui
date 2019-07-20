import styled from 'styled-components';
import { InputForm } from '../../utils/mixins';

export const TextArea = styled.textarea`
	${InputForm};
	min-height : 6em;
  max-height : 6em;
  min-width  : 100%;
  max-width  : 100%;
`;
