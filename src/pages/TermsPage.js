import React from 'react';
import styled from 'styled-components';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import importIcon from 'assets/img/icons/import.svg';
import arrowLeft from 'assets/img/icons/arrow-left.svg';
import {
  textData1,
  textData2,
  textData3,
  textData4,
  textData5,
  textData7,
  textData8,
  textData10,
} from 'data/terms';

const TermsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 1200px) {
    background-color: #ffffff;
    margin-top: -24px;
    padding: 20px;
    gap: 20px;

    & + footer {
      margin-top: -24px;
    }
  }
`;

const MainBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;
  padding: 40px 24px;
  background-color: #940000;
  border-radius: 12px;

  h2 {
    max-width: 39ch;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 114%;
    color: #ffffff;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.38rem;
      text-align: center;
    }
  }

  p {
    max-width: 56ch;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #ffffff;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
      text-align: center;
    }
  }

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    gap: 20px;
    padding: 32px 20px;

    #mobile {
      display: flex;
    }

    #desktop {
      display: none;
    }
  }
`;

const MainDataContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 405px;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;

    p {
      color: #424242;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    @media (max-width: 1200px) {
      order: 2;
      padding: 20px 0px;
      gap: 20px;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 24px;

    @media (max-width: 1200px) {
      order: 1;

      & > button:last-child {
        width: 100%;
      }
    }
  }

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 137%;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.94rem;
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    padding: 0px;
    gap: 20px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;

  h3 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.44rem;
    line-height: 114%;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 1.12rem;
    }
  }

  h5 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1rem;
    line-height: 137%;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: #424242;
    margin: 0px;
    white-space: pre-line;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
  }

  @media (max-width: 1200px) {
    gap: 16px;
  }
`;

const TitlesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  background-color: #f2f2f2;
  border-radius: 12px;

  h4 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.19rem;
    line-height: 137%;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.94rem;
    }
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 137%;
    color: black;
    margin: 0px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px;
    padding: 0px;
    gap: 22px;
    list-style: none;

    h5 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1rem;
      line-height: 137%;
      color: black;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    li {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 110%;
      color: black;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    @media (max-width: 1200px) {
      gap: 18px;
    }
  }

  @media (max-width: 1200px) {
    padding: 20px;
    gap: 20px;
  }
`;

const MobileHeader = styled.div`
  display: none;
  width: 100vw;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-top: -24px;
  background-color: #ffffff;
  padding: 0px 20px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h4 {
      font-weight: 700;
      font-size: 0.94rem;
      line-height: 133%;
      text-align: center;
      color: black;
      margin: 0px;
    }

    img {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
  }
`;

function LegaltermsPage() {
  return (
    <>
      <MobileHeader>
        <div>
          <img src={arrowLeft} onClick={() => navigate(-1)} />
          <h4>Términos legales</h4>
        </div>
      </MobileHeader>
      <TermsContainer>
        <MainBanner>
          <h2 id="desktop">Términos legales</h2>
          <p id="desktop">
            Conoce los términos y condiciones que garantizan una experiencia
            segura y confiable en Organización Sánchez. Aquí encontrarás toda la
            información sobre el uso de nuestra plataforma, protección de datos
            y derechos de los usuarios.
          </p>
          <h2 id="mobile">Conoce nuestros términos y condiciones</h2>
          <p id="mobile">
            Esto ayuda a garantizar una experiencia segura y confiable.
          </p>
        </MainBanner>
        <MainDataContainer>
          <div>
            <TextContainer>
              <h3>Términos y condiciones generales de uso</h3>
              <p>
                Las bases de una experiencia segura y transparente. Aquí
                establecemos las normas que regulan el acceso y uso de la
                plataforma, garantizando un entorno confiable para compradores y
                vendedores. Conoce tus derechos, responsabilidades y las reglas
                que hacen de Organización Sánchez un espacio seguro y eficiente.
              </p>
            </TextContainer>
            <h4>1. Acceso al sitio web</h4>
            {textData1.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>2. Datos personales del usuario y registro en el sitio web</h4>
            {textData2.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>3. Menores de edad</h4>
            {textData3.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>4. Responsabilidad del usuario</h4>
            {textData4.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>5. Exclusión de garantías y responsabilidad</h4>
            {textData5.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>6. Vínculos a otros sitios web</h4>
            <p>
              El Sitio Web de Organización Sánchez puede incluir vínculos a
              otros sitios de Internet operados por terceros. Organización
              Sánchez no avala ni respalda los contenidos, servicios o productos
              ofrecidos en estos sitios externos. Asimismo, no asume
              responsabilidad alguna por el contenido, la exactitud de la
              información, ni por los servicios o productos proporcionados en
              dichos sitios. Cualquier decisión de acceder a sitios web de
              terceros vinculados desde Organización Sánchez será tomada bajo el
              exclusivo riesgo del Usuario.
            </p>
            <h4>7. Cesión o uso comercial no autorizado</h4>
            {textData7.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>8. Cancelación</h4>
            {textData8.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>9. Indemnización</h4>
            <p>
              El Usuario se compromete a defender, indemnizar y mantener indemne
              a Organización Sánchez, así como a sus filiales, subsidiarias,
              directivos, empleados, representantes, agentes y asesores, frente
              a cualquier reclamo, acción legal o extrajudicial, demanda,
              denuncia penal, sanción económica, multa o responsabilidad de
              cualquier tipo, que derive o esté relacionada con: a) Cualquier
              incumplimiento de estas Condiciones Generales o de la legislación
              vigente en el territorio aplicable. b) La falsedad o inexactitud
              de la información publicada por el Usuario en el Sitio Web, o
              proporcionada en nombre del Usuario. Esto incluye, sin limitación:
              La información relacionada con inmuebles publicados, su
              titularidad, o la capacidad legal para vender o arrendar los
              mismos. Los datos suministrados al momento de la creación de la
              cuenta en el Sitio Web. El contenido de cualquier anuncio sea
              gratuito o de costo. c) Cualquier interacción del Usuario con
              otros Usuarios o terceros. Esta obligación de indemnización
              incluye, pero no se limita, a cubrir los costos y honorarios
              legales razonables en los que Organización Sánchez incurra como
              resultado de la defensa en procedimientos legales o
              administrativos derivados de las situaciones mencionadas.
            </p>
            <h4>10. Disposiciones generales</h4>
            {textData10.map(item => (
              <TextContainer>
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
              </TextContainer>
            ))}
            <h4>11. Duración y terminación</h4>
            <p>
              La prestación de los Servicios a través del Sitio Web tiene una
              duración indefinida. No obstante, Organización Sánchez se reserva
              el derecho de suspender o dar por terminada la prestación de
              dichos Servicios y/o de cualquier contenido del Sitio Web en
              cualquier momento, sin previo aviso y a su exclusiva discreción.
            </p>
            <h4>12. Localización</h4>
            <TextContainer>
              <h5>12.1. Perú</h5>
              <p>
                Organización Sánchez está registrada bajo el nombre de Sanchez
                Organization S.A.C., con RUC N°20613100203 y su domicilio se
                encuentra en Jr. Salaverry N°475, distrito de Calleria,
                provincia de Coronel Portillo, Región de Ucayali.
              </p>
              <p>
                El Sitio Web es accesible a través de
                <a>www.organizacionsanchez.com.</a> Estas Condiciones Generales
                están sujetas a la legislación vigente de Perú. El Usuario
                acepta someterse a la jurisdicción exclusiva de los juzgados y
                tribunales del distrito judicial de Pucallpa, Perú, renunciando
                expresamente a cualquier otro fuero o jurisdicción que pudiera
                corresponder.
              </p>
            </TextContainer>
          </div>
          <div>
            <TitlesContainer>
              <h4>Tabla de contenido</h4>
              <ul>
                <h5> Términos y condiciones generales de uso</h5>
                <li>1. Acceso al sitio web</li>
                <li>
                  2. Datos personales del usuario y registro en el sitio web
                </li>
                <li>3. Menores de edad</li>
                <li>4. Responsabilidad del usuario</li>
                <li>5. Exclusión de garantías y responsabilidad</li>
                <li>6. Vínculos a otros sitios web</li>
                <li>7. Cesión o uso comercial no autorizado</li>
                <li>8. Cancelación</li>
                <li>9. Indemnización</li>
                <li>10. Disposiciones generales</li>
                <li>11. Duración y terminación</li>
                <li>12. Localización</li>
              </ul>
              <ul>
                <h5>Términos y condiciones de contratación</h5>
                <li>1. Acceso al sitio web</li>
                <li>1. Datos personales del usuario y registro en el sitio web</li>
                <li>1. Menores de edad</li>
              </ul>
              <ul>
                <h5>Políticas de privacidad</h5>
                <li>1. Acceso al sitio web</li>
                <li>1. Datos personales del usuario y registro en el sitio web</li>
                <li>1. Menores de edad</li>
              </ul>
            </TitlesContainer>
            <TitlesContainer>
              <h4>Modificaciones</h4>
              <p>Última modificación realizada: 12 de enero de 2025</p>
            </TitlesContainer>
            <PrimaryCustomButton>
              <img src={importIcon} alt="import" />
              Descargar en PDF
            </PrimaryCustomButton>
          </div>
        </MainDataContainer>
      </TermsContainer>
    </>
  );
}

export default LegaltermsPage;
