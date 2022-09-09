import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  margin-top: -5rem;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`
export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
      color: ${props => props.theme['base-title']};
    }
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;

  }
`




