import styled from "styled-components";

export const SocialLinkPublicationContainer = styled.u`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme['base-label']};
    }
  }
`