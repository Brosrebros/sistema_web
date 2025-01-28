import React from 'react';
import PaymentForm from 'components/custom/PaymentForm/PaymentForm';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;

  & > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const PaymentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  h3 {
    font-weight: 700;
    font-size: 1.44rem;
    color: black;
    margin: 0px;
  }

  span {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 10px;
    color: black;

    b {
      font-weight: 700;
      font-size: 2.25rem;
      color: black;
      line-height: 24px;
    }

    p {
      max-height: 24px;
      font-weight: 400;
      font-size: 1rem;
      color: black;
      margin: 0px;
      line-height: 11px;
    }
  }
`;

export const PaymentData = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 10px;

  p {
    font-weight: 400;
    font-size: 1.19rem;
    color: black;
    margin: 0px;
    line-height: 12px;
  }

  b {
    font-weight: 900;
    color: black;
    margin: 0px;
    line-height: 12px;
  }
`;

export const Separador = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #dbdbdb;
`;

function Paymentpage() {
  return (
    <PaymentContainer>
      <div>
        <PaymentTitle>
          <h3>Actualízate a Premium</h3>
          <span>
            <b>S/. 432.00</b>
            <p>/ año</p>
          </span>
        </PaymentTitle>

        <Separador />

        <PaymentData>
          <p>
            <b>Premium</b>
          </p>
          <p>S/. 432.00</p>
          <p>Se factura anualmente</p>
        </PaymentData>

        <Separador />

        <PaymentData>
          <p>Sub total</p>
          <p>S/. 432.00</p>
          <p>Impuesto</p>
          <p>S/. 00.00</p>
        </PaymentData>

        <Separador />

        <PaymentData>
          <p>
            <b>Sub total</b>
          </p>
          <p>
            <b>S/. 432.00</b>
          </p>
        </PaymentData>
      </div>
      <PaymentForm />
    </PaymentContainer>
  );
}

export default Paymentpage;
