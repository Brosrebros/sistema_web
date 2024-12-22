import { Form, Col, Row, Container } from 'react-bootstrap';
import { Title } from 'components/mainpage/Title';
import locationIcon from 'assets/icons/simplenavbar-endondelabuscas.svg';
import CustomBreadcrumb from 'components/custom/CustomBreadcrumb/CustomBreadcrumb';
import CustomCardGrid from 'components/custom/CustomCardGrid/CustomCardGrid';
import CustomTextCard from 'components/custom/CustomTextCard/CustomTextCard';
import { rootPaths } from 'routes/paths';

const TermsConditionsPage = () => {
  return (
    <Row className=" m-2 justify-content-center mx-auto">
      <Col xs={12} lg={12} xxl={10}>
        <Container style={{ maxWidth: '800px' }}>
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
        </Container>

        <CustomBreadcrumb
          prevlink="Soporte"
          link1="Términos legales"
          href1={`/${rootPaths.supportRoot}/terms`}
          link2="Términos y condiciones generales de uso"
        />
        <CustomCardGrid>
          <CustomTextCard
            title="Términos y condiciones generales de uso"
            icon={null}
          >
            <p>
              Esta sección define las condiciones (en adelante, las "Condiciones
              Generales") para el uso de los contenidos y servicios (en
              adelante, los "Servicios") del sitio web indicado en la cláusula
              12 (en adelante, el "Sitio Web"). El Sitio Web y los Servicios son
              proporcionados por la empresa mencionada en la cláusula 12 (en
              adelante, "Organización Sanchez").
            </p>

            <p>
              Si no está de acuerdo con las Condiciones Generales, le
              solicitamos que abandone el Sitio Web y se abstenga de utilizar o
              contratar los Servicios ofrecidos. El acceso y uso del Sitio Web
              por parte del usuario se interpretará como una aceptación total e
              incondicional de las Condiciones Generales establecidas aquí.
            </p>

            <p>
              En lo sucesivo, los términos "Usted" y "Usuario" se emplearán para
              referirse a todas las personas físicas o jurídicas que accedan al
              Sitio Web, por cualquier motivo, y que deseen navegar en él o
              contratar los Servicios regulados por estas Condiciones Generales.
              inversion inmobilarias.
            </p>
          </CustomTextCard>
          <CustomTextCard title="1.1. Acceso al sitio web." icon={null}>
            <div>
              <h5>1.1. Acceso al sitio web.</h5>
              <p>
                El acceso y uso del Portal no requieren que el Usuario se
                registre o suscriba previamente. Sin embargo, algunos Servicios
                ofrecidos a través del Portal pueden estar condicionados a un
                registro, suscripción previa y/o al pago de una tarifa.
                Organización Sánchez podrá, en cualquier momento, permitir que
                los Usuarios accedan a cualquiera de los sitios administrados
                por la entidad, utilizando las mismas credenciales de acceso
                (nombre de usuario y contraseña) que hayan sido generadas
                previamente para cualquiera de esos portales.
              </p>
              <h5>1.2. Uso del sitio web.</h5>
              <p>
                El Usuario se compromete a hacer uso del Portal en estricto
                cumplimiento con estas Condiciones Generales, las disposiciones
                legales aplicables señaladas en la cláusula 12, así como con los
                principios de moralidad y buenas prácticas aceptadas. El Usuario
                se abstendrá de emplear el Portal para fines ilícitos, ilegales
                o que contravengan lo establecido en estas Condiciones Generales
                o la legislación pe ruana. Asimismo, queda prohibido cualquier
                uso que perjudique los derechos o intereses de terceros,
                incluyendo otros usuarios del Portal y los clientes de la
                Organización Sánchez. Del mismo modo, el Usuario deberá evitar
                cualquier acción que pueda dañar, sobrecargar, inutilizar o
                afectar el funcionamiento normal del Portal o impedir el acceso
                o disfrute del mismo por parte de otros Usuarios.
              </p>
              <h5>1.3. Contenido del sitio web</h5>
              <p>
                Los elementos disponibles en este Portal, tales como textos,
                información, gráficos, imágenes, logotipos, marcas, software,
                bases de datos, diseños, estructuras funcionales y cualquier
                otro material relacionado (en adelante, el “Contenido”), están
                protegidos por las normativas vigentes aplicables, incluyendo,
                pero sin limitarse a, las leyes de derechos de autor, patentes,
                marcas registradas, modelos de utilidad, diseños industriales y
                nombres de dominio. Todo el Contenido pertenece exclusivamente a
                Organización Sánchez y/o a sus empresas asociadas, filiales o
                matrices, así como a otras entidades relaciona
              </p>
            </div>
          </CustomTextCard>
          <CustomTextCard title="Contenido" icon={null}>
            <ul>
              <li>Acceso al sitio web</li>
              <li>Datos personales y registro en el sitio web</li>
              <li>Menores de edad</li>
              <li>Responsabilidad del usuario</li>
              <li>Exclusión de garantías y de responsabilidad</li>
              <li>Vínculos a otro sitios web</li>
              <li>Cesión o uso comercial no autorizado</li>
              <li>Cancelación</li>
              <li>Indemnización</li>
              <li>Disposiciones generales</li>
              <li>Duración y terminación</li>
              <li>Localización</li>
            </ul>
          </CustomTextCard>
        </CustomCardGrid>
      </Col>
    </Row>
  );
};

export default TermsConditionsPage;
