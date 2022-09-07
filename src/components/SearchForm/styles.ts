import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    height: 3.125rem;
    background: #040F1A;
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    margin-top: 0.75rem;
    color: ${props => props.theme['base-text']};

    &::placeholder {
    color: ${props => props.theme['base-label']};
    }
  }
`