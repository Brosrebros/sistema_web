import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  display: none;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 60px;
  border-radius: 12px 12px 0px 0px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;

  & > div:first-child {
    width: 60px;
    height: 4px;
    border-radius: 100px;
    background-color: #c3c3c3;
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
  }

  @media (max-width: 968px) {
    display: flex;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:first-child {
    width: 52px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }
  }

  p {
    font-weight: 400;
    font-size: 0.62rem;
    text-align: center;
    color: #424242;
    margin: 0px;
  }
`;
