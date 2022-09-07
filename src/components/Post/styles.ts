import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  height: 16.25rem;
  background: ${props => props.theme['base-post']};
  border-radius: 0.625rem;
  border: 2px solid ${props => props.theme['base-post']};
  padding: 2rem;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme['base-label']};
  }

  header {
    display: flex;
    margin-bottom: 1.25rem;
    gap: 1rem;

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
      color: #E7EDF4;
      flex: 1;
      color: ${props => props.theme['base-title']};
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      width: max-content;
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-align: justify;
  }
`