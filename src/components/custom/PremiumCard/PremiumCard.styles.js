import styled from 'styled-components';

export const PremiumCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 28px;
  background-color: ${({ type }) =>
    type === 'esencial' ? '#f2f2f2' : '#ffffff'};
  border-radius: 12px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
    height: 16px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
      height: 13px;
    }
  }

  span {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
    color: black;

    p {
      max-height: 24px;
      font-weight: 400;
      font-size: 1rem;
      color: black;
      margin: 0px;
      line-height: 11px !important;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    b {
      font-weight: 700;
      font-size: 2.25rem;
      color: black;
      line-height: 24px;

      @media (max-width: 1200px) {
        font-size: 1.81rem;
      }
    }
  }

  & > div:nth-child(3) {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    gap: 10px;

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 122%;
      color: #424242;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    padding: 0px;
    margin: 0px;

    & + button {
      cursor: default !important;
      background-color: #c3c3c3;

      &:hover {
        background-color: #c3c3c3;
      }
    }

    h4 {
      font-weight: 700;
      font-size: 1.19rem;
      color: black;
      margin-bottom: 20px;

      @media (max-width: 1200px) {
        font-size: 0.94rem;
      }
    }

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;

      font-weight: 400;
      font-size: 1rem;
      color: #424242;
      padding: 6px 0px;

      img {
        width: 24px;
        height: 24px;
      }

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }
  }

  button {
    width: 100%;
    background-color: #dbdbdb;
    cursor: none;
  }

  @media (max-width: 1200px) {
    gap: 18px;
  }
`;
