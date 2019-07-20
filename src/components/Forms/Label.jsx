import styled from 'styled-components';

export const Label = styled.label`
	position      : relative;
  display       : block;
  font-size     : var(--small-font-size);
  margin-bottom : .2em;
  & + input::placeholder {
    color: transparent;
  }
`;
