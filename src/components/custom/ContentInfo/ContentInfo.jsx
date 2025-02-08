import React from 'react';
import {
  ContentInfoContainer,
  CardContainer,
  CustomCard,
  GridTextContainer,
} from './ContentInfo.styles';
import mesa1 from '../../../assets/img/Mesa de trabajo 1.jpg';
import mesa2 from '../../../assets/img/Mesa de trabajo 2.jpg';
import icon1 from '../../../assets/img/icons/House Magnifying Glass.svg';
import icon2 from '../../../assets/img/icons/House Computer Magnifying Glass.svg';
import icon3 from '../../../assets/img/icons/House On Sale Contract.svg';
import icon4 from '../../../assets/img/icons/Support People.svg';

function ContentInfo({ type }) {
  return (
    <ContentInfoContainer>
      {type === 'left' ? <img src={mesa1} alt="mesa de trabajo" /> : null}

      <CardContainer>
        <GridTextContainer>
          <h3>
            La organización Sánchez impulsa el cambio con innovación constante
          </h3>
          <h4>El mercado inmobiliario al alcance de cada persona</h4>
        </GridTextContainer>

        <CustomCard>
          <img src={icon1} alt="house" />
          <div>
            <h4>Amplia variedad de opciones</h4>
            <p>
              Desde casas y departamentos hasta terrenos y proyectos nuevos,
              tenemos la propiedad que se adapta a tus necesidades.
            </p>
          </div>
        </CustomCard>

        <CustomCard>
          <img src={icon2} alt="house" />
          <div>
            <h4>Busqueda clara y rápida</h4>
            <p>
              Nuestros filtros inteligentes y mapas interactivos están diseñados  
              para que encuentres lo que buscas sin complicaciones.
            </p>
          </div>
        </CustomCard>

        <CustomCard>
          <img src={icon3} alt="house" />
          <div>
            <h4>Información confiable y detallada</h4>
            <p>
              Publicamos datos precisos, fotos de calidad y toda la información  
              que necesitas para tomar una decisión informada.
            </p>
          </div>
        </CustomCard>

        <CustomCard>
          <img src={icon4} alt="house" />
          <div>
            <h4>Soporte a tu alcance</h4>
            <p>
              Nuestro equipo está siempre disponible para ayudarte y responder 
              tus consultas en cada etapa de tu búsqueda.
            </p>
          </div>
        </CustomCard>
      </CardContainer>

      {type === 'right' ? <img src={mesa2} alt="mesa de trabajo" /> : null}
    </ContentInfoContainer>
  );
}

export default ContentInfo;
