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

const PropertyList = ({ property }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
      <Card
        className="overflow-hidden"
        onClick={() => {
          navigate(`/${rootPaths.propertyDetailRoot}/${property.id}`);
        }}
      >
        <Card.Body className="p-0">
          <Row className="g-0">
            <Col md={4} lg={3}>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  contain: 'size',
                  alignContent: 'center',
                  backgroundColor: '#D6D6D6',
                }}
                onClick={e => e.stopPropagation()}
                className="d-md-flex d-none"
              >
                <CustomListSlider
                  {...sliderSettings}
                  style={{ width: '100%', height: '100%' }}
                >
                  {imagenes && imagenes.length > 0
                    ? imagenes.map((img, index) => (
                        <div key={index} style={{ height: '100%' }}>
                          <img
                            src={img}
                            alt={`Imagen ${index + 1}`}
                            style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </div>
                      ))
                    : null}
                </CustomListSlider>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '0.4rem',
                    opacity: '0',
                    position: 'absolute',
                    left: '10px',
                    bottom: '10px',
                    backgroundColor: 'white',
                    color: '#424242',
                    fontSize: '0.8rem',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '8px',
                    margin: '0px',
                  }}
                >
                  {`${currentSlide + 1}/${imagenes.length}`}
                  <img
                    src={cameraIcon}
                    style={{ height: '1rem', width: 'auto' }}
                  />
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#D6D6D6',
                  height: '200px',
                }}
                className="d-md-none d-flex"
              >
                <Image
                  src={imagenes ? imagenes[0] : ''}
                  alt=""
                  className="w-100 h-100 fit-cover fit-cover"
                />
              </div>
            </Col>
            <Col
              md={8}
              lg={9}
              className="pb-1"
              style={{ padding: '0px 0.8rem' }}
            >
              <Row className="g-0 h-100">
                <div
                  style={{
                    display: 'flex',
                    marginTop: '12px',
                    position: 'relative',
                  }}
                >
                  <SubtleBadge
                    // key={tag.id} pill bg={tag.type}
                    className="my-2"
                    bg={tipoOperacion == 'Alquiler' ? 'success' : 'danger'}
                  >
                    {/* <FontAwesomeIcon
                  icon={tag.icon}
                  className="me-1"
                  transform="shrink-4"
                /> */}
                    {tipoOperacion}
                  </SubtleBadge>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'black',
                    }}
                    className="pb-0 my-auto px-1"
                  >
                    {tipoPropiedad}
                  </p>

                  <Button
                    className="fs-10 d-flex p-1 gap-1 align-items-center"
                    style={{
                      position: 'absolute',
                      right: '0',
                      backgroundColor: '#f2f2f2',
                      border: 'none',
                    }}
                  >
                    <img height={'15px'} src={corazon_rojo} className="m-1" />
                  </Button>
                </div>
                {/* <h5 className="fs-9">
                    <Link to={paths.trainerProfile}>{trainer}</Link>
                  </h5>
                  <h4 className="mt-3 mt-sm-0 fs-9 fs-lg-8">
                    <Link to={paths.courseDetails(id)} className="text-900">
                      {name}
                    </Link>
                  </h4> */}
                {/* <p className="fs-10 mt-2 d-none d-lg-block">
                    {excerpt.substring(0, 142)}...
                  </p> */}
                {/* <div className="flex-1 d-flex align-items-end fw-semibold fs-10">
                    <span className="me-1 text-900">{rating}</span>
                    <StarRating readonly initialValue={rating} />
                    <span className="ms-2 text-secondary">
                      {review.toLocaleString()} reviews
                    </span>
                  </div> */}
                <h4
                  className="fs-8 text-warning d-flex align-items-center"
                  style={{ fontWeight: 'bold' }}
                >
                  {precio !== null && precio.pen ? (
                    <span style={{ color: 'black', fontSize: '1.5rem' }}>
                      S/{precio.pen}
                    </span>
                  ) : null}
                  {precio !== null && precio.pen && precio.usd ? (
                    <span style={{ color: 'black', fontSize: '1.5rem' }}>
                      {' - '}
                    </span>
                  ) : null}
                  {precio !== null && precio.usd ? (
                    <span style={{ color: 'black', fontSize: '1.5rem' }}>
                      ${precio.usd}
                    </span>
                  ) : null}
                  {oldPrice ? (
                    <del className="ms-2 fs-10 text-700">${oldPrice}</del>
                  ) : null}
                </h4>
                {/* <p className="mb-0 fs-10 text-800">
                        {totalEnrolled.toLocaleString()} Learners Enrolled
                      </p> */}
                <div
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  {calleNumero}
                </div>
                <div
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: 'black',
                    fontSize: '1rem',
                  }}
                >
                  {provincia}, {departamento}
                </div>
                <div
                  className="fs-10"
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: 'black',
                  }}
                >
                  {areaTotal && `${areaTotal}m2,`}
                  {banos > 0 ? `${banos} baño` : null}
                  {banos > 1 ? 's' : null}
                </div>
                <div
                  className="fs-10 py-3"
                  style={{
                    color: 'black',
                  }}
                >
                  {descripcion !== null ? descripcion.detalle : ' '}
                </div>
                <div
                  className="my-1 pt-2"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '0',
                    borderStyle: 'solid',
                    borderWidth: '0.5px 0 0 0',
                    borderColor: '#D6D6D6',
                  }}
                >
                  <img
                    src={placeholderImage}
                    style={{ height: '2rem', width: 'auto' }}
                  />
                  <Stack direction="horizontal" gap={1}>
                    <Button
                      className="fs-10 d-flex p-1 gap-1 align-items-center"
                      variant="danger"
                    >
                      <img height={'15px'} src={telefono} className="m-1" />
                    </Button>
                    <Button
                      className="fs-10 d-flex p-1 gap-1 align-items-center"
                      variant="success"
                    >
                      <img height={'15px'} src={whatsapp} className="m-1" />
                      <div className="d-sm-flex d-none me-1">Whatsapp</div>
                    </Button>
                    <Button
                      className="fs-10 d-flex p-1 gap-1 align-items-center"
                      variant="danger"
                    >
                      <img height={'15px'} src={contactar} className="m-1" />
                      <div className="d-sm-flex d-none me-1">Contactar</div>
                    </Button>
                  </Stack>
                </div>

                {/* <Col lg={4} className="mt-4 mt-lg-0">
                  <Flex
                    justifyContent="between"
                    className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                  >
                    <div className="mb-lg-4 mt-auto mt-lg-0">
                      <h4 className="fs-8 text-warning d-flex align-items-center">
                        <span>${precio}</span>
                        {oldPrice && (
                          <del className="ms-2 fs-10 text-700">${oldPrice}</del>
                        )} 
                      </h4> 
                      <p className="mb-0 fs-10 text-800">
                        {totalEnrolled.toLocaleString()} Learners Enrolled
                      </p> 
                      <p>{calleNumero}</p>
                    </div>
                    <Flex className="mt-3 flex-lg-column gap-2">
                      <Button
                        size="md"
                        variant="falcon-default"
                        className="fs-10 text-600 white-space-nowrap w-100"
                        onClick={handleFavouriteClick}
                      >
                        <FontAwesomeIcon
                          icon={
                            isInFavouriteItems(id) ? 'heart' : ['far', 'heart']
                          }
                          className={classNames('', {
                            'text-danger': isInFavouriteItems(id),
                          })}
                        />
                        <span className="ms-1 d-none d-lg-inline">
                          {isInFavouriteItems(id)
                            ? 'Wishlisted'
                            : 'Add to Wishlist'}
                        </span>
                      </Button>
                      <Button
                        size="md"
                        variant="primary"
                        className="fs-10"
                        onClick={handleAddToCart}
                      >
                        <FontAwesomeIcon
                          icon={`${
                            isInCart(id) ? 'shopping-cart' : 'cart-plus'
                          }`}
                        />
                        <span className="ms-1 d-none d-lg-inline">
                          {isInCart(id) ? 'Added' : 'Add to Cart'}
                        </span>
                      </Button>
                    </Flex> 
                  </Flex>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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
