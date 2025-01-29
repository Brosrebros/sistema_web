import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Image, Row, Stack } from 'react-bootstrap';
import SubtleBadge from 'components/common/SubtleBadge';
import corazon_rojo from '../../assets/img/icons/corazonrojo.svg';
import telefono from 'assets/icons/propertylist-telefono-white.svg';
import whatsapp from 'assets/icons/propertylist-whatsapp.svg';
import contactar from 'assets/icons/propertylist-contactar.svg';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import placeholderImage from '../../assets/img/placeholder-image.png';
import CustomListSlider from 'components/custom/CustomListSlider/CustomListSlider';
import cameraIcon from '../../assets/img/icons/camara_gris.svg';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CatalogCard from 'components/custom/CatalogCard/CatalogCard';

const PropertyList = ({ property }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  console.log(property)

  const {
    multimedia: { imagenes },
    tipoOperacion,
    tipoPropiedad,
    precio,
    oldPrice,
    ubicacion: { calleNumero, provincia, departamento },
    caracteristicas: { areaTotal, banos },
    descripcion,
  } = property;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => setCurrentSlide(index),
  };

  return (
    <>
      <CatalogCard property={property} />
    </>
  );
};

PropertyList.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string,
    tipoOperacion: PropTypes.string,
    tipoPropiedad: PropTypes.string,
    ubicacion: PropTypes.shape({
      calleNumero: PropTypes.string,
      direccionCompleta: PropTypes.string,
      departamento: PropTypes.string,
      provincia: PropTypes.string,
      formaUbicacion: PropTypes.string,
    }),
    caracteristicas: PropTypes.shape({
      dormitorios: PropTypes.number,
      banos: PropTypes.number,
      medioBanos: PropTypes.number,
      estacionamiento: PropTypes.number,
      areaConstruida: PropTypes.number,
      areaTotal: PropTypes.number,
      antiguedad: PropTypes.string,
    }),
    precio: PropTypes.object,
    descripcion: PropTypes.shape({
      titulo: PropTypes.string,
      detalle: PropTypes.string,
    }),
    multimedia: PropTypes.shape({
      imagenes: PropTypes.arrayOf(PropTypes.string),
      videos: PropTypes.arrayOf(PropTypes.string),
    }),
    aspectosAdicionales: PropTypes.shape({
      caracteristicasGenerales: PropTypes.arrayOf(PropTypes.string),
      exteriores: PropTypes.arrayOf(PropTypes.string),
      servicios: PropTypes.arrayOf(PropTypes.string),
      areasComunes: PropTypes.arrayOf(PropTypes.string),
    }),
    estado: PropTypes.string,
    fechaDisponibilidad: PropTypes.shape({
      $date: PropTypes.number,
    }),
    clienteId: PropTypes.string,
    partition: PropTypes.string,
    fechaCreacion: PropTypes.shape({
      $date: PropTypes.string,
    }),
    prioridad: PropTypes.number,
    activo: PropTypes.bool,
    destacado: PropTypes.bool,
    oldPrice: PropTypes.string,
  }),
};

export default PropertyList;
