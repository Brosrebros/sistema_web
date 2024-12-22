import React from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import PropertyDetailAdvertiser from './PropertyDetailAdvertiser';
import PropertyDetailDescription from './PropertyDetailDescription';
import { usePropertyContext } from 'providers/PropertyProvider';
import BackButton from 'components/utilities/BackButton';
import PropertySlider from '../PropertySlider';
import CustomBreadcrumb from 'components/custom/CustomBreadcrumb/CustomBreadcrumb';

const PropertyDetail = () => {
  const { propertyState } = usePropertyContext();
  return (
    <Stack className="mx-2" gap={3}>
      {/* {propertyState.property !== null && (
        <Prueba imagenes={propertyState.property.multimedia.imagenes} />
      )} */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <BackButton />
        <CustomBreadcrumb prevlink="Inmobiliarias" link1="Detalles" />
      </div>
      <Card>
        {propertyState.property !== null &&
          propertyState.property !== undefined && (
            <Row className="m-3 g-3">
              <Col xl={6} xs={12}>
                <div>
                  <PropertyDetailAdvertiser property={propertyState.property} />
                </div>
              </Col>
              <Col xl={6} xs={12}>
                <div>
                  <PropertyDetailDescription
                    property={propertyState.property}
                  />
                </div>
              </Col>
            </Row>
          )}
      </Card>
      <PropertySlider
        data={propertyState.properties}
        title="Encuentra propiedades similares"
      />
      <PropertySlider
        data={propertyState.properties}
        title="Propiedades recomendadas (24)"
      />
    </Stack>
  );
};

export default PropertyDetail;
