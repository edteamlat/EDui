import styled from 'styled-components';
import { Z_INDEX_MODAL } from '../../utils/variables';
import cancel from '../../assets/cancel.svg';

export const ModalContainer = styled.div`
	position   : fixed;
  width      : 100%;
  height     : 100%;
  left       : 0;
  top        : 0;
  background : rgba(250, 253, 255, .9);
  display    : flex;
  z-index : ${Z_INDEX_MODAL};

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
