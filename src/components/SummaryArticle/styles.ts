import styled from "styled-components";

export const SummaryArticleContainer = styled.div`
  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  margin-top: -5rem;
  padding: 2rem;
  display: flex;
  

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`