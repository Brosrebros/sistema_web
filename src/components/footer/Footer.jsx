import React from 'react';
import { MainFooter, FooterData, FooterLinks } from './Footer.styles';
import footerLogo from '../../assets/img/icons/Logo comercial - blanco.svg';

function Footer() {
  return (
    <MainFooter>
      <FooterData>
        <img src={footerLogo} alt="inmobiliaria sanchez" />
        <p>Organización Sánchez S.A.C. Todos los derechos reservados © 2025</p>
      </FooterData>
      <FooterLinks>
        <a href="#">Terminos y Condiciones de uso</a>
        <a href="#">Terminos y Condiciones de contratación</a>
        <a href="#">Politica de Privacidad</a>
      </FooterLinks>
    </MainFooter>
  );
}

export default Footer;
