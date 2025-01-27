import styled from 'styled-components';

export const MainFooter = styled.footer`
  width: 100%;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 48px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const FooterData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: ${({ type }) => type === "main" ? "0px" : "0 auto"};

  p,
  a {
    font-size: 0.8125em;
    font-weight: normal;
    color: #424242;
    margin: 0px;
  }

  a {
    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    width: 159px;
    height: auto;
  }
`;

export const FooterLinks = styled(FooterData)`
  gap: 20px;
`;
