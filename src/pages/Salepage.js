import CustomPageLayout from 'components/custom/CustomPageLayout/CustomPageLayout';
import MainBanner from 'components/custom/MainBanner/MainBanner';
import ContentInfo from 'components/custom/ContentInfo/ContentInfo';
import Tutorial from 'components/custom/Tutorial/Tutorial';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

const CustomButton = styled.button`
  width: auto;
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
`;

const InfoBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 32px 8px;
  background-color: #940000;
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
    }

    h3 {
      font-weight: 900;
      font-size: 1.44rem;
      text-align: center;
      color: #ffffff;
      margin: 0px;
      line-height: 100%;
    }

    h4 {
      font-weight: 900;
      font-size: 1.19rem;
      text-align: center;
      color: #ffffff;
      margin: 0px;
      line-height: 100%;
    }

    p {
      font-weight: 400;
      font-size: 1em;
      text-align: center;
      color: #ffffff;
      margin: 0px;
    }

    div {
      max-width: 265px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
`;

const Salepage = () => {

  const navigate = useNavigate()

  return (
    <CustomPageLayout>
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
      <InfoBanner>
        <div style={{ width: '100%', maxWidth: '560px' }}>
          <h3>¡Tu éxito comienza aquí!</h3>
          <p>
            Publica tu propiedad ahora y conéctate con miles de compradores
            interesados. Es fácil, rápido. ¡Hazlo realidad hoy mismo!
          </p>
          <CustomButton type="secondary" onClick={() => navigate(`/${rootPaths.processRoot}`)}>Vende tu inmueble ahora</CustomButton>
        </div>
      </InfoBanner>
    </CustomPageLayout>
  );
};

export default Salepage;
