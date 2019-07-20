import styled from 'styled-components';
import cancel from '../../assets/cancel.svg';

export const ModalContainer = styled.div`
	position   : fixed;
  width      : 100%;
  height     : 100%;
  left       : 0;
  top        : 0;
  background : var(--body-bg-modal);
  display    : flex;
  z-index : var(--z-index-modal);

	&::before {
  	content    : "";
    width      : 3rem;
    height     : 3rem;
    background : url(${cancel});
    position   : absolute;
    top        : 2rem;
    right      : 2rem;
    cursor     : pointer;
	}
`;
