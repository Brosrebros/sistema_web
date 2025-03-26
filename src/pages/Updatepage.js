import React from 'react';
import styled from 'styled-components';
import arrowLeft from 'assets/img/icons/arrow-left.svg';

const UpdatesContainer = styled.div`
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
  grid-template-columns: 1.5fr 2fr;
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

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 16px;

      h3 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 1.44rem;
        line-height: 16px;
        color: black;
        margin: 0px;

        @media (max-width: 1200px) {
          font-size: 1.12rem;
        }
      }

      span {
        display: block;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.81rem;
        line-height: 9px;
        color: #717171;
        margin: 0px;

        @media (max-width: 1200px) {
          font-size: 0.62rem;
        }
      }

      @media (max-width: 1200px) {
        gap: 12px;
      }
    }

    p {
      display: block;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 114%;
      color: black;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }

    & > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
      background-color: #f2f2f2;
      border-radius: 12px;

      p {
        display: block;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        line-height: 114%;
        color: black;
        margin: 0px;

        @media (max-width: 1200px) {
          font-size: 0.81rem;
        }

        b {
          font-weight: 900;
        }
      }
    }

    @media (max-width: 1200px) {
      gap: 20px;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 18px;

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
  gap: 20px;

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

  ul {
    margin: 0px;
    
    li {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: black;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
      }
    }
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

function Updatepage() {
  return (
    <>
      <MobileHeader>
        <div>
          <img src={arrowLeft} onClick={() => navigate(-1)} />
          <h4>Actualizaciones</h4>
        </div>
      </MobileHeader>
      <UpdatesContainer>
        <MainBanner>
          <h2>Actualizaciones y mantenimiento</h2>
          <p id="desktop">
            Mantente informado sobre las últimas actualizaciones, mejoras y
            mantenimientos de Organización Sánchez. Aquí encontrarás todos los
            cambios y optimizaciones que implementamos para brindarte una
            experiencia más segura, eficiente e innovadora.
          </p>
          <p id="mobile">
            Actualizaciones, mejoras y mantenimientos de Sellblink.
          </p>
        </MainBanner>
        <MainDataContainer>
          <div>
            <div>
              <h3>Actualización v1.1 - “Apenas estamos comenzando”</h3>
              <span>Lanzamiento realizado el 15 de febrero de 2025</span>
            </div>
            <p>
              Hemos trabajado en mejorar la experiencia de usuario con nuevas
              funciones y optimización del rendimiento en toda la plataforma.
              Además, corregimos errores reportados por nuestra comunidad y
              mejoramos la seguridad en la gestión de datos.
            </p>
            <div>
              <p>
                Próxima actualización prevista para <b>Abril 2024</b>, con
                mejoras en el sistema de publicaciones y más herramientas para
                vendedores.
              </p>
            </div>
          </div>
          <div>
            <h4>Detalles de la actualización</h4>
            <TextContainer>
              <h5>Mejoras</h5>
              <ul>
                <li>
                  Nuevo panel de vendedor mejorado: Ahora con estadísticas más
                  detalladas sobre el rendimiento de tus publicaciones,
                  consultas y visitas.
                </li>
                <li>
                  Optimización de búsqueda de propiedades: Implementamos filtros
                  avanzados y resultados más precisos según la ubicación y
                  preferencias del usuario.
                </li>
                <li>
                  Sistema de notificaciones inteligente: Recibe alertas en
                  tiempo real sobre consultas, publicaciones destacadas y
                  actualizaciones de tus propiedades.
                </li>
                <li>
                  Diseño adaptativo mejorado: La interfaz ahora es más fluida en
                  dispositivos móviles, brindando una experiencia optimizada
                  para todos los usuarios.
                </li>
              </ul>
            </TextContainer>
            <TextContainer>
              <h5>Correcciones</h5>
              <ul>
                <li>
                  Mejoras en la carga de imágenes: Reducción del tiempo de carga
                  para que tus propiedades se muestren con mayor rapidez.
                </li>
                <li>
                  Arreglo de notificaciones duplicadas: Se solucionó un problema
                  donde algunas alertas se enviaban varias veces al mismo
                  usuario.
                </li>
                <li>
                  Corrección en el formulario de contacto: Algunos usuarios
                  experimentaban retrasos al enviar consultas, ahora la entrega
                  de mensajes es instantánea.
                </li>
                <li>Optimizado: Rendimiento general de la app</li>
              </ul>
            </TextContainer>
            <TextContainer>
              <h5>Equipo responsable</h5>
              <ul>
                <li>Desarrollo Backend: Valdemar Colichón</li>
                <li>Desarrollo Frontend: Gabriel Martinez</li>
                <li>UX/UI: Franco Garzón, Bross Sanchez, Josefina Medianero</li>
              </ul>
            </TextContainer>
          </div>
        </MainDataContainer>
      </UpdatesContainer>
    </>
  );
}

export default Updatepage;
