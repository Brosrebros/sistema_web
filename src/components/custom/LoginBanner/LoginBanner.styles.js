import styled from 'styled-components';

export const LoginBannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 40px;
  border-radius: 12px;
  background-color: #c3c3c3;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 122%;
    color: black;
    margin: 0px;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
    margin: 0px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
