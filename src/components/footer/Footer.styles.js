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

  @media (max-width: 968px) {
    padding: 20px;
    height: auto;
    flex-direction: column;
    gap: 24px;
    border-radius: 0px;
    margin-top: -24px;
  }
`;

export const FooterData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: ${({ type }) => (type === 'main' ? '0px' : '0 auto')};

  p,
  a {
    font-size: 0.8125em;
    font-weight: normal;
    color: #424242;
    margin: 0px;

    @media (max-width: 968px) {
      text-align: center;
    }
  }

  a {
    @media (max-width: 968px) {
      line-height: 9px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    width: 159px;
    height: auto;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 28px;
  }
`;

export const FooterLinks = styled(FooterData)`
  gap: 20px;

  @media (max-width: 968px) {
    gap: 24px;
  }
`;
