import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import PropertyDetailAdvertiser from './PropertyDetailAdvertiser';
import PropertyDetailDescription from './PropertyDetailDescription';
import { usePropertyContext } from 'providers/PropertyProvider';
import BackButton from 'components/utilities/BackButton';
import PropertySlider from '../PropertySlider';
import CustomBreadcrumb from 'components/custom/CustomBreadcrumb/CustomBreadcrumb';
import { useNavigate, useParams } from 'react-router-dom';

const PropertyDetail = () => {
  const { propertyState, fetchPropertyById } = usePropertyContext();
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estado para forzar el refresco
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (id) {
      fetchPropertyById(id);
    }
  }, [id, fetchPropertyById]);

  // Forzar refresco y actualización de propiedad
  const handlePropertyClick = (propertyId) => {
    navigate(`/properties/${propertyId}`);
    fetchPropertyById(propertyId);
    setRefreshKey((prevKey) => prevKey + 1);  // Cambiar la clave fuerza el re-render
  };

  return (
    <Stack key={refreshKey} className="mx-2" gap={3}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomBreadcrumb prevlink="Inmobiliarias" link1="Detalles" />
      </div>
      <Card style={{ boxShadow: 'none' }}>
        {propertyState.property && (
          <Row className="m-3 g-3">
            <Col xl={6} xs={12}>
              <PropertyDetailAdvertiser property={propertyState.property} />
            </Col>
            <Col xl={6} xs={12}>
              <PropertyDetailDescription property={propertyState.property} />
            </Col>
          </Row>
        )}
      </Card>

      <PropertySlider
        data={propertyState.properties}
        title="Encuentra propiedades similares"
        onPropertyClick={handlePropertyClick}  // Pasar el click handler
      />

      <PropertySlider
        data={propertyState.properties}
        title="Propiedades recomendadas (24)"
        onPropertyClick={handlePropertyClick}
      />
    </Stack>
  );
};

export default PropertyDetail;
