import React from 'react';
import StandaloneLayout from 'components/custom/StandaloneLayout/StandaloneLayout';
import ProcessBar from 'components/custom/ProcessBar/ProcessBar';
import ProcessResume from 'components/custom/ProcessResume/ProcessResume';
import ProcessForm from 'components/custom/ProcessForm/ProcessForm';
import { ProcessProvider } from 'processContext';
import styled from 'styled-components';

const ProcessContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 432px 1px auto;
  gap: 40px;
  padding: 24px 64px;

  & > span:nth-child(2) {
    display: block;
    height: 100%;
    width: 1px;
    background-color: #c3c3c3;
  }
`;

function SellProcesspage() {
  return (
    <ProcessProvider>
      <StandaloneLayout type="process">
        <ProcessBar />
        <ProcessContainer>
          <ProcessResume />
          <span></span>
          <ProcessForm />
        </ProcessContainer>
      </StandaloneLayout>
    </ProcessProvider>
  );
}

export default SellProcesspage;
