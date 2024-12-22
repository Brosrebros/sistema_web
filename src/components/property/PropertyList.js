import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Image, Row, Stack } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
// import { useCourseContext } from 'providers/CourseProvider';
// import useCourses from 'hooks/useCourses';
// import playIcon from 'assets/img/icons/play.svg';
// import ModalVideoContent from 'components/app/e-learning/ModalVideoContent';
// import Flex from 'components/common/Flex';
// import Hoverbox from 'components/common/Hoverbox';
import SubtleBadge from 'components/common/SubtleBadge';
// import StarRating from 'components/common/StarRating';
// import paths from 'routes/paths';
import telefono from 'assets/icons/propertylist-telefono-red.svg';
import whatsapp from 'assets/icons/propertylist-whatsapp.svg';
import contactar from 'assets/icons/propertylist-contactar.svg';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

const PropertyList = ({ property }) => {
  // const [showModal, setShowModal] = useState(false);

  // const {
  //   thumbnail: { image, video, videoPoster },
  //   id,
  //   name,
  //   trainer,
  //   price,
  //   oldPrice,
  //   totalEnrolled,
  //   tags,
  //   excerpt,
  //   rating,
  //   review,
  // } = property;

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

  // const { isInFavouriteItems, isInCart } = useCourseContext();

  // const { handleAddToCart, handleFavouriteClick } = useCourses(property);
  return (
    <>
      {/* <ModalVideoContent
        show={showModal}
        setShow={setShowModal}
        attachment={{ image: videoPoster, src: video }}
      /> */}
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
                className="d-md-flex d-none"
              >
                <Image
                  src={imagenes ? imagenes[0] : ''}
                  alt=""
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                  }}
                />
                {/* <div className="p-3">
              <h5 className="fs-9 mb-2">
                <Link to={paths.courseDetails(id)} className="text-1100">
                  {name}
                </Link>
              </h5>
              <h5 className="fs-9">
                <Link to={paths.trainerProfile}>{trainer}</Link>
              </h5>
            </div> */}
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
                {/* <div className="p-3">
              <h5 className="fs-9 mb-2">
                <Link to={paths.courseDetails(id)} className="text-1100">
                  {name}
                </Link>
              </h5>
              <h5 className="fs-9">
                <Link to={paths.trainerProfile}>{trainer}</Link>
              </h5>
            </div> */}
              </div>
            </Col>
            <Col md={8} lg={9} className="px-2 pb-1">
              <Row className="g-0 h-100">
                <div
                  style={{
                    display: 'flex',
                    marginTop: '12px',
                  }}
                >
                  <SubtleBadge
                    // key={tag.id} pill bg={tag.type}
                    className="my-2"
                    bg={tipoOperacion == 'Alquiler' ? 'danger' : 'success'}
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
                    <span style={{ color: 'black' }}>S/{precio.pen}</span>
                  ) : null}
                  {precio !== null && precio.pen && precio.usd ? (
                    <span style={{ color: 'black' }}>{' - '}</span>
                  ) : null}
                  {precio !== null && precio.usd ? (
                    <span style={{ color: 'black' }}>${precio.usd}</span>
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
                  }}
                >
                  {calleNumero}
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
                  <Button className="p-1 fs-10">Ver más</Button>
                  <Stack direction="horizontal" gap={1}>
                    <Button
                      className="fs-10 d-flex p-1 gap-1 align-items-center"
                      variant="light"
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
