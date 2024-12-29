import React from 'react';
// import { version } from 'config';
import logo from 'assets/img/illustrations/logo-organizacion.png';
import styled from 'styled-components';

const MainFooter = styled.footer`
  border-radius: 0.6rem;
  background-color: #940000;
  width: 1640px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: all 0.15s linear;
  margin: 0 auto;

  @media (min-width: 1940px) {
    width: 1840px;
  }

  @media (max-width: 1746px) {
    width: 84vw;
  }

  @media (max-width: 1400px) {
    width: 70vw;
  }
  @media (max-width: 1300px) {
    width: 80vw;
  }
`;

const Footer = () => (
  <MainFooter>
    <div
      className="py-2 text-center"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem', // Espaciado entre elementos
      }}
    >
      <div style={{ flex: '0 0 auto' }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '130px',
            filter: 'brightness(0) saturate(100%) invert(100%)',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.1rem', // Espaciado entre los textos
          alignItems: 'center',
        }}
      >
        <p className="footer_titulo_primera_pagina">organizacionsanchez.com</p>
        <p className="footer_titulo_primera_pagina">
          Términos y condiciones de uso
        </p>
        <p className="footer_titulo_primera_pagina">
          Términos y condiciones de contratación
        </p>
        <p className="footer_titulo_primera_pagina">Política de privacidad</p>
      </div>
    </div>
  </MainFooter>
);

export default Footer;
