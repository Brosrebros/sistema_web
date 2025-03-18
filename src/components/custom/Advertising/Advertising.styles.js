import styled from 'styled-components';

export const AdvertisingContainer = styled.div`
  width: 100%;
  height: 87px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;

  font-size: 1em;
  font-weight: normal;
  font-family: 'Roboto';
  color: #424242;

  @media (max-width: 968px) {
    font-size: 0.81rem;
    height: 73px;
  }
`;
