import styled from "styled-components";

export const PublicationHeaderContainer = styled.div`
  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  margin-top: -5rem;
  padding: 2rem;
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  h1 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 130%;
    color: #E7EDF4;
    color: ${props => props.theme['base-title']};
  }
`