import React, { useState } from 'react';
import styled from 'styled-components';
import MobileMenu from 'components/custom/MobileMenu/MobileMenu';
import Navbar from 'components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import clockIcon from 'assets/img/icons/clock.svg';

const CustomLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  transition: all 0.2s ease;
  background-color: #f2f2f2;

  @media (max-width: 1200px) {
    width: 100%;

    & > nav {
      margin-top: -24px;
    }

    & + footer,
    & + footer + footer {
      display: none;
    }
  }
`;

const NotificationsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  margin-top: -24px;

  & > div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    overflow-y: auto;

    h5 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 11px;
      color: #424242;
      margin: 0px;
    }
  }

  & + div + footer,
  & + div + footer + footer {
    display: none;
  }
`;

const Notification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 12px;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span:first-child {
      font-weight: 700;
      font-size: 0.81rem;
      line-height: 154%;
      text-align: right;
      color: #940000;
    }

    & > span:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      font-weight: 400;
      font-size: 0.81rem;
      line-height: 154%;
      color: #424242;

      img {
        width: 15px;
        height: 15px;
      }
    }
  }

  & > div:last-child {
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: 93px auto;
    align-items: center;
    gap: 12px;

    img {
      height: 100%;
      width: 93px;
      border-radius: 12px;
      background-color: #c3c3c3;
    }

    p {
      max-width: 28ch;
      font-weight: 400;
      font-size: 1rem;
      line-height: 137%;
      color: #424242;
      margin: 0px;
      text-align: start;

      b {
        font-weight: 700;
        color: black;
        font-size: 1em;
      }
    }
  }
`;

const TabButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #c3c3c3;
  margin-top: -24px;
`;

const CustomButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  padding: 12px 16px;
  transition: all 0.1s ease;
  border-radius: 12px;
  position: relative;
  margin-bottom: 4px;
  height: 48px;

  /* Fuente */
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Aptos';
  color: #424242;
  line-height: 70%;

  &:hover {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#f2f2f2'};
  }

  &:active {
    background-color: ${({ activeSection }) =>
      activeSection ? '#ffffff' : '#e4e4e4'};
  }

  ${({ activeSection }) =>
    activeSection &&
    `
    &::before {
      content: "";
      position: absolute;
      bottom: -4px; /* Asegura que la línea esté justo debajo */
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #940000;
      border-radius: 10px;
    }
  `}

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const Newspage = () => {
  const [activeSection, setActiveSection] = useState('todas');
  const navigate = useNavigate();

  const handleActiveSection = section => {
    setActiveSection(section);
  };

  return (
    <CustomLayout>
      <Navbar active="news" />
      <TabButtonContainer>
        <CustomButton
          onClick={() => handleActiveSection('todas')}
          activeSection={activeSection === 'todas'}
        >
          Todas
        </CustomButton>
        <CustomButton
          onClick={() => {
            handleActiveSection('nuevas');
          }}
          activeSection={activeSection === 'nuevas'}
        >
          Nuevas
        </CustomButton>
        <CustomButton
          onClick={() => {
            handleActiveSection('leídas');
          }}
          activeSection={activeSection === 'leídas'}
        >
          Leídas
        </CustomButton>
      </TabButtonContainer>
      <NotificationsWrapper>
        {activeSection === 'todas' ? (
          <div>
            <h5>Nuevas</h5>
            <Notification>
              <div>
                <span>Inmobiliaria</span>{' '}
                <span>
                  Hace 1 hora <img src={clockIcon} alt="clock" />
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito
                  de Comas. <b>S/. 1,200</b>
                </p>
              </div>
            </Notification>
            <Notification>
              <div>
                <span>Inmobiliaria</span>{' '}
                <span>
                  Hace 1 hora <img src={clockIcon} alt="clock" />
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito
                  de Comas. <b>S/. 1,200</b>
                </p>
              </div>
            </Notification>
            <h5>Leídas</h5>
            <Notification>
              <div>
                <span>Inmobiliaria</span>{' '}
                <span>
                  Hace 1 hora <img src={clockIcon} alt="clock" />
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito
                  de Comas. <b>S/. 1,200</b>
                </p>
              </div>
            </Notification>
          </div>
        ) : activeSection === 'nuevas' ? (
          <div>
            <h5>Nuevas</h5>
            <Notification>
              <div>
                <span>Inmobiliaria</span>{' '}
                <span>
                  Hace 1 hora <img src={clockIcon} alt="clock" />
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito
                  de Comas. <b>S/. 1,200</b>
                </p>
              </div>
            </Notification>
            <Notification>
              <div>
                <span>Inmobiliaria</span>{' '}
                <span>
                  Hace 1 hora <img src={clockIcon} alt="clock" />
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito
                  de Comas. <b>S/. 1,200</b>
                </p>
              </div>
            </Notification>
          </div>
        ) : activeSection === 'leídas' ? (
          <div>
            <h5>Leídas</h5>
            <Notification>
              <div>
                <span>Inmobiliaria</span>{' '}
                <span>
                  Hace 1 hora <img src={clockIcon} alt="clock" />
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <p>
                  <b>Nueva casa en alquiler</b> en la ciudad de Lima, distrito
                  de Comas. <b>S/. 1,200</b>
                </p>
              </div>
            </Notification>
          </div>
        ) : null}
      </NotificationsWrapper>
      <MobileMenu active="news" />
    </CustomLayout>
  );
};

export default Newspage;
