import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import MainBanner from 'components/custom/MainBanner/MainBanner';
import ContentInfo from 'components/custom/ContentInfo/ContentInfo';
import Tutorial from 'components/custom/Tutorial/Tutorial';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import { useModal } from 'modalContext';
import MobileMenu from 'components/custom/MobileMenu/MobileMenu';

const CustomButton = styled.button`
  width: auto;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid white;
  outline: none;
  background-color: ${({ type }) => (type === 'main' ? 'white' : '#940000')};
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;
  font-size: 1em;
  font-weight: normal;
  font-family: 'Aptos';
  color: ${({ type }) => (type === 'main' ? '#424242' : 'white')};
  line-height: 100%;

  img {
    height: 20px;
    width: 20px;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1200px) {
    font-size: 0.81rem;
  }
`;

const InfoBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 32px 8px;
  background-color: #233f75;
  border-radius: 12px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    span {
      font-weight: 700;
      font-size: 2.5rem;
      text-transform: uppercase;
      color: #ffffff;
      line-height: 100% !important;

      @media (max-width: 1200px) {
        font-size: 2rem;
      }
    }

    h3 {
      font-weight: 900;
      font-size: 1.44rem;
      text-align: center;
      color: #ffffff;
      margin: 0px;
      line-height: 100%;

      @media (max-width: 1200px) {
        font-size: 1.12rem;
      }
    }

    h4 {
      font-weight: 900;
      font-size: 1.19rem;
      text-align: center;
      color: #ffffff;
      margin: 0px;
      line-height: 100%;

      @media (max-width: 1200px) {
        font-size: 0.94rem;
      }
    }

    p {
      font-weight: 400;
      font-size: 1em;
      text-align: center;
      color: #ffffff;
      margin: 0px;

      @media (max-width: 1200px) {
        font-size: 0.81rem;
        max-width: 30ch;
      }
    }

    div {
      max-width: 265px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      @media (max-width: 1200px) {
        gap: 12px;
      }
    }

    @media (max-width: 1200px) {
      gap: 24px;
    }
  }

  @media (max-width: 1200px) {
    border-radius: 0px;
    padding: 32px 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const CustomLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  font-family: 'Aptos_display';
  transition: all 0.15s linear;
  margin: 0 auto;

  @media (max-width: 1200px) {
    background-color: #ffffff;
    gap: 0px;
    margin-top: -24px;
    padding-top: 24px;

    & > div:first-child {
      margin: 0px 20px;
      margin-bottom: 20px;
      max-width: calc(100vw - 40px);
      justify-content: center;
    }

    & > div:nth-child(3) {
      padding-top: 40px;
    }

    & + footer {
      margin-top: -24px;
    }
  }
`;

const Salepage = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  return (
    <CustomLayout>
      <MainBanner type="sale" />
      <InfoBanner>
        <div>
          <span>+450k</span>
          <div>
            <h4>Visibilidad garantizada</h4>
            <p>Más de 450,000 visitas mensuales.</p>
          </div>
        </div>
        <div>
          <span>+12k</span>
          <div>
            <h4>Amplia oferta publicada</h4>
            <p>Actualmente hay +12,000 propiedades activas.</p>
          </div>
        </div>
        <div>
          <span>+95k</span>
          <div>
            <h4>Comunidad en crecimiento</h4>
            <p>Somos una red de +95,000 usuarios registrados.</p>
          </div>
        </div>
        <div>
          <span>%80</span>
          <div>
            <h4>Tasa de éxito en ventas</h4>
            <p>
              El 85% de las publicaciones logran ventas o alquileres en tiempo
              récord.
            </p>
          </div>
        </div>
      </InfoBanner>
      <ContentInfo type="right" />
      <Tutorial />
      <InfoBanner style={{ background: '#940000' }}>
        <div style={{ width: '100%', maxWidth: '560px' }}>
          <h3>¡Tu éxito comienza aquí!</h3>
          <p>
            Publica tu propiedad ahora y conéctate con miles de compradores
            interesados. Es fácil, rápido. ¡Hazlo realidad hoy mismo!
          </p>
          <CustomButton
            type="secondary"
            onClick={() => openModal('loginModal')}
          >
            Vende tu inmueble ahora
          </CustomButton>
        </div>
      </InfoBanner>
      <MobileMenu active="sale" />
    </CustomLayout>
  );
};

export default Salepage;
