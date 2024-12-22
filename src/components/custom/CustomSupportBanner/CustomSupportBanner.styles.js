import styled from 'styled-components';

export const CustomSupportBannerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const CustomSupportBannerTitle = styled.div`
  position: relative;
  background-color: #940000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;

  img {
    height: 40px;
    width: auto;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    font-family: 'Aptos_Display';
    color: #ffffff;
    margin-bottom: 0px;
  }

  & > div {
    position: absolute;
    right: 16px;
  }
`;
