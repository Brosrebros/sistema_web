import React from 'react';
import {
  FooterContainerStyled,
  TextContainer,
  ButtonsContainer,
  CustomInputMail
} from './CustomFooter.styles';
import PrimaryCustomButton from '../CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import buttonIcon from '../../../assets/img/icons/directbox-default.svg';
import instagramIcon from "../../../assets/img/icons/mdi_instagram.svg"
import twitterIcon from "../../../assets/img/icons/devicon_twitter.svg"
import facebookIcon from "../../../assets/img/icons/ic_baseline-facebook.svg"
import youtubeIcon from "../../../assets/img/icons/mdi_youtube.svg"
import linkedinIcon from "../../../assets/img/icons/mdi_linkedin.svg"

function CustomFooter() {
  return (
    <FooterContainerStyled>
      <div
        style={{
          width: '100%',
          maxWidth: '495px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <TextContainer>
          <h3>Suscríbete a nuestro boletín informativo</h3>
          <p>
            Recibe actualizaciones y ofertas exclusivas directamente en tu
            correo
          </p>
        </TextContainer>

        <div style={{ width: '100%', display: 'flex', gap: '12px' }}>
          <CustomInputMail placeholder='Correo electrónico'/>
          <PrimaryCustomButton>
            <img src={buttonIcon} alt="directbox" />
            Suscribirse
          </PrimaryCustomButton>
        </div>
      </div>

      <ul>
        <li>Soporte legal</li>
        <li>Centro de ayuda</li>
        <li>Preguntas frecuentes</li>
        <li>Políticas de privacidad</li>
        <li>Términos y condiciones</li>
        <li>Reportar un problema</li>
      </ul>
      <ul>
        <li>Organización Sánchez</li>
        <li>Sobre nosotros</li>
        <li>Empresas que confían en nosotros</li>
        <li>Blog y novedades</li>
        <li>Trabaja con nosotros</li>
        <li>Contacto</li>
      </ul>
      <ul>
        <li>Síguenos y mantente informado:</li>
        <ButtonsContainer>
          <img src={instagramIcon} alt="instagram"/>
          <img src={twitterIcon} alt="twitter" />
          <img src={facebookIcon} alt="facebook" />
          <img src={youtubeIcon} alt="youtube" />
          <img src={linkedinIcon} alt="linkedin" />
        </ButtonsContainer>
      </ul>
    </FooterContainerStyled>
  );
}

export default CustomFooter;
