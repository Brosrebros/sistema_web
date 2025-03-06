import React from 'react';
import {
  ContentInfoContainer,
  CardContainer,
  CustomCard,
  GridTextContainer,
} from './ContentInfo.styles';
import icon1 from 'assets/img/icons/House Magnifying Glass.svg';
import icon2 from 'assets/img/icons/House Computer Magnifying Glass.svg';
import icon3 from 'assets/img/icons/House On Sale Contract.svg';
import icon4 from 'assets/img/icons/Support People.svg';
import icon5 from 'assets/img/icons/House Computer.svg';

import mesa1 from 'assets/img/Mesa de trabajo 1.jpg';
import mesa2 from 'assets/img/Mesa de trabajo 2.jpg';

function ContentInfo({ type }) {
  const leftData = [
    {
      title: 'Amplia variedad de opciones',
      description:
        'Desde casas y departamentos hasta terrenos y proyectos nuevos,  tenemos la propiedad que se adapta a tus necesidades.',
      image: icon1,
    },
    {
      title: 'Búsqueda clara y rápida',
      description:
        'Nuestros filtros inteligentes y mapas interactivos están diseñados  para que encuentres lo que buscas sin complicaciones.',
      image: icon2,
    },
    {
      title: 'Información confiable y detallada',
      description:
        'Publicamos datos precisos, fotos de calidad y toda la información  que necesitas para tomar una decisión informada.',
      image: icon3,
    },
    {
      title: 'Soporte a tu alcance',
      description:
        'Nuestro equipo está siempre disponible para ayudarte y responder tus consultas en cada etapa de tu búsqueda.',
      image: icon4,
    },
  ];

  const rightData = [
    {
      title: 'Amplia cartera de  compradores',
      description:
        'Conecta tu propiedad con miles de  compradores activos. Aseguramos  máxima visibilidad para que encuentres  al cliente ideal.',
      image: icon5,
    },
    {
      title: 'Publicación fácil y  rápida',
      description:
        'Publica tu propiedad en minutos. Carga  la información y fotos fácilmente,  mientras nuestro sistema hace el resto.',
      image: icon2,
    },
    {
      title: 'Herramientas inteligentes  para destacar',
      description:
        'Destaca tu anuncio con opciones  avanzadas y estadísticas, además de  guías para optimizar tu publicación.',
      image: icon3,
    },
    {
      title: 'Soporte a tu medida todo  el tiempo',
      description:
        'Nuestro soporte te acompaña en cada  paso, desde crear tu anuncio hasta  cerrar la venta.',
      image: icon4,
    },
  ];

  const data = type === 'left' ? leftData : rightData;

  return (
    <ContentInfoContainer type={type}>
      {type === 'left' ? <img src={mesa1} alt="mesa de trabajo" /> : null}

      <CardContainer>
        <GridTextContainer>
          <h3>
            {type === 'left'
              ? 'La organización Sánchez impulsa el cambio con innovación constante'
              : 'Vende con confianza y llega más lejos con la organización Sánchez'}
          </h3>
          <h4>
            {type === 'left'
              ? 'El mercado inmobiliario al alcance de cada persona'
              : 'Con nuestra plataforma, alcanzar compradores reales es más fácil, rápido y seguro.'}
          </h4>
        </GridTextContainer>

        {data.map((item, index) => (
          <CustomCard key={index}>
            <img src={item.image} alt={item.image} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </CustomCard>
        ))}
      </CardContainer>

      {type === 'right' ? <img src={mesa2} alt="mesa de trabajo" /> : null}
    </ContentInfoContainer>
  );
}

export default ContentInfo;
