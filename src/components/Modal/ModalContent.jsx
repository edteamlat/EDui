import styled from 'styled-components';
import { widget } from '../../utils/mixins';

export const ModalContent = styled.div`
	${widget};
	width         : 90%;
  max-width     : 1000px;
  max-height    : 90vh;
  margin        : auto;
  padding       : 2rem;
  border-radius : .25rem;
  overflow-y    : auto;
`;
