import { MainpageBanner } from 'components/mainpage/MainpageBanner';
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
// Card, Row, Col,
// import FalconLink from 'components/common/FalconLink';
// import paths from 'routes/paths';
// import { Recommendations } from 'components/mainpage/Recommendations';
// import { Title } from 'components/mainpage/Title';
// import { intelligence } from 'data/dashboard/analytics';
import PropertyForm from 'components/property/PropertyForm';
import PropertySlider from 'components/property/PropertySlider';
// import Revenue from 'components/mainpage/Revenue';
import { useFrontpage } from 'hooks/useFrontpage';
import MainpageCards from 'components/mainpage/MainpageCards';
import { usePropertyContext } from 'providers/PropertyProvider';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';
import MainpageCharsSlider from 'components/mainpage/MainpageCharsSlider';

const Mainpage = () => {
  const [state] = useFrontpage();
  const { propertyState } = usePropertyContext();
  const navigate = useNavigate(); // Inicializa useNavigate
  const [filterForm, setFilterForm] = useState({
    tipoOperacion: '',
    direccionCompleta: '',
    tipoPropiedad: '',
    presupuesto: '',
    ordenarPor: '',
  });

  return (
    <>
      <Stack gap={3} style={{ maxWidth: '1620px', margin: '0 auto' }}>
        <MainpageBanner src={state.data ? state.data[0].imagenes : ''} />
        <PropertyForm
          filterForm={filterForm}
          setFilterForm={setFilterForm}
          handleOnSubmit={() => {
            const params = new URLSearchParams(filterForm).toString();
            navigate(`/${rootPaths.catalogRoot}?${params}`);
          }}
          msgBtn="Buscar"
        />
        <PropertySlider
          data={propertyState.properties}
          title="Descubre las propiedades recomendadas (24)"
        />
        <MainpageCards />
        <MainpageCharsSlider />
      </Stack>
    </>
  );
};

export default Mainpage;
