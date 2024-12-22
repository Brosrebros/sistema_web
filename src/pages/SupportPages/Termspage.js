import CustomBreadcrumb from 'components/custom/CustomBreadcrumb/CustomBreadcrumb';
import CustomTextCard from 'components/custom/CustomTextCard/CustomTextCard';
import { Row, Col, Form } from 'react-bootstrap';
import { Title } from 'components/mainpage/Title';
import locationIcon from 'assets/icons/simplenavbar-endondelabuscas.svg';
import { rootPaths } from 'routes/paths';

const TermsPage = () => {
  return (
    <Row className=" m-2 justify-content-center mx-auto" style={{ maxWidth: '1620px', margin: '0 auto' }}>
      <Col xs={12} lg={8} xxl={6}>
        <Row>
          <Col xs={6}>
            <Title>Hola, ¿en qué podemos ayudarte?</Title>
          </Col>

          <Col
            xs={6}
            // lg={3} md={6} xs={12}
            className="px-2 pb-5"
          >
            <div
              style={{
                display: 'flex',
                borderRadius: '0.6rem',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: '0 8px',
                width: '100%',
                height: '36px',
              }}
            >
              <img src={locationIcon} width="16px" />
              <Form.Control
                type="text"
                id="direccionCompleta"
                name="direccionCompleta"
                aria-describedby="Buscar palabras clave"
                placeholder="Buscar palabras clave"
                style={{
                  fontSize: '14px',
                  border: 'none',
                  height: '100%',
                  boxShadow: 'none',
                  fontFamily: 'Aptos !important',
                }}
              />
            </div>
          </Col>
        </Row>
        <CustomBreadcrumb
          prevlink="Soporte"
          link1="Términos legales"
          link2=""
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '24px',
          }}
        >
          <CustomTextCard title="Términos legales">
            <p>
              Este apartado contiene información esencial sobre los acuerdos y
              políticas que rigen el uso de nuestros servicios. Te invitamos a
              leer detenidamente estos documentos para garantizar una
              experiencia transparente y confiable.
            </p>
          </CustomTextCard>
          <CustomTextCard
            title="Términos y condiciones generales de uso"
            link={`/${rootPaths.supportRoot}/termsconditions`}
          >
            <p>
              Términos y condiciones que establecen las normas generales que
              rigen el acceso y uso de la página web. Se aplican a todos los
              usuarios, independientemente de si contratan un servicio o no. Su
              finalidad principal es informar y proteger tanto a los
              propietarios de la web como a los usuarios.
            </p>
          </CustomTextCard>
          <CustomTextCard title="Términos y condiciones de contratación">
            <p>
              Términos y condiciones para regular las relaciones entre el
              proveedor y los usuarios que contraten productos o servicios a
              través de la página web. Están enfocados en los aspectos
              relacionados con las compras, pagos y derechos del consumidor.
            </p>
          </CustomTextCard>
          <CustomTextCard title="Politicas de privacidad">
            <p>
              Documento que informa cómo se recopilan, procesan, utilizan y
              protegen los datos personales de los usuarios que interactúan con
              la página, conforme a normativas de protección de datos vigentes
              en el Perú.
            </p>
          </CustomTextCard>
        </div>
      </Col>
    </Row>
  );
};

export default TermsPage;
