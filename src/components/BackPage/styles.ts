import styled from "styled-components";

export const BackPageContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['blue']};
  text-decoration: none;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`