import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import { Button } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import addIcon from '../../assets/img/icons/add.svg';
import removeIcon from '../../assets/img/icons/minus.svg';
import CustomLabel from 'components/custom/CustomFormUI/CustomLabel/CustomLabel';
import CustomCounter from 'components/custom/CustomFormUI/CustomCounter/CustomCounter';
import CustomFilter from 'components/custom/CustomFormUI/CustomFilter/CustomFilter';
import CustomInputNumber from 'components/custom/CustomFormUI/CustomInputNumber/CustomInputNumber';
import resetIcon from '../../assets/img/icons/refresh-2.svg';
import CustomBadge from 'components/custom/CustomBadge/CustomBadge';
import closeIcon from '../../assets/img/icons/Close_MD.svg';
import filterIcon from '../../assets/img/icons/filter.svg';
import arrowIcon from '../../assets/img/icons/arrow-down.svg';
import styled from 'styled-components';

const PropertyFilters = ({
  filterForm,
  setFilterForm,
  setShow,
  isOffcanvas,
}) => {
  const [filterOptions, setFilterOptions] = useState([]);

  const handleFilterOptions = e => {
    const { type, name, value, checked } = e.target;

    if (type === 'checkbox') {
      let options = [...filterOptions];
      options = options.filter(
        option => !(option.name === name && option.value === value)
      );
      if (checked) options.push({ name, value });
      setFilterOptions(options);
    }

    if (type === 'radio') {
      const options = filterOptions.filter(option => option.name !== name);
      setFilterOptions([...options, { name, value }]);
    }
  };

  const updateFilters = filterList => {
    const result = {
      superficie: '',
      banos: '',
      estacionamientos: '',
      anunciante: '',
      antiguedad: '',
      publicacion: '',
      ambiente: [],
      exteriores: [],
      servicios: [],
    };

    filterList.forEach(({ name, value }) => {
      if (
        ['superficie', 'anunciante', 'antiguedad', 'publicacion'].includes(name)
      ) {
        result[name] = value;
      } else if (['ambiente', 'exteriores', 'servicios'].includes(name)) {
        result[name].push(value);
      } else if (['banos', 'estacionamientos'].includes(name)) {
        result[name] = value;
      }
    });

    setFilterForm({ ...filterForm, ...result });
  };

  useEffect(() => {
    updateFilters(filterOptions);
    console.log(filterOptions);
  }, [filterOptions]);

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          borderRadius: '12px',
          backgroundColor: 'white',
          padding: '24px',
          position: 'sticky',
          top: '95px',
          height: 'calc(100vh - 120px)',
          overflow: 'hidden',
        }}
      >
        <div
          as={Flex}
          style={{
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#f2f2f2',
              borderRadius: '12px',
            }}
          >
            <Flex
              className="gap-4 flex-xl-grow-1 align-items-center justify-content-xl-between"
              style={{ width: '100%' }}
            >
              <h4
                className="mb-0 fs-9 d-flex align-items-center"
                style={{ color: '#1e1e1e', fontWeight: 'bold', gap: '6px' }}
              >
                <img src={filterIcon} />
                <span style={{ fontSize: '1.1875em' }}>Más filtros</span>
              </h4>
              <div>
                <PrimaryCustomButton
                  onClick={() => setFilterOptions([])}
                  variant="primary"
                >
                  <img
                    src={resetIcon}
                    style={{ width: '20px', height: '20px' }}
                  />
                  Reiniciar
                </PrimaryCustomButton>
              </div>
            </Flex>
            {isOffcanvas && (
              <Button
                onClick={() => setShow(false)}
                className="btn-close text-reset"
                size="sm"
                variant="link"
              />
            )}
            {filterOptions.length > 0 && (
              <Flex
                wrap="wrap"
                className="gap-2"
                style={{ width: '100%', marginTop: '1em' }}
              >
                {filterOptions.map((tag, idx) => (
                  <CustomBadge key={`${tag.name}-${idx}`} color="white">
                    {tag.value}
                    <Button
                      size="sm"
                      variant="link"
                      className="p-0 text-900"
                      onClick={() =>
                        setFilterOptions(
                          filterOptions.filter(
                            ({ name, value }) =>
                              !(name === tag.name && value === tag.value)
                          )
                        )
                      }
                    >
                      <img
                        src={closeIcon}
                        alt="close"
                        style={{
                          width: '15px',
                          height: '15px',
                          marginBottom: '1px',
                        }}
                      />
                    </Button>
                  </CustomBadge>
                ))}
              </Flex>
            )}
          </div>
        </div>
        <SimpleBar style={{ width: '100%', height: 'calc(100vh - 260px)' }}>
          <form
            style={{ overflow: 'hidden' }}
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <SurfaceFilter />
            <NumberFeaturesFilter
              onChange={updatedFeatures =>
                setFilterForm(prev => ({ ...prev, ...updatedFeatures }))
              }
            />
            <CustomFilter
              title="Tipo de anunciante"
              inputType="radio"
              name="anunciante"
              options={[
                { value: 'Todos', label: 'Todos' },
                { value: 'Inmobiliaria', label: 'Inmobiliaria' },
                { value: 'Dueño directo', label: 'Dueño directo' },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Antigüedad"
              inputType="radio"
              name="antiguedad"
              options={[
                { value: 'En construcción', label: 'En construcción' },
                { value: 'A estrenar', label: 'A estrenar' },
                { value: 'Hasta 5 años', label: 'Hasta 5 años' },
                { value: 'Más de 5 años', label: 'Más de 5 años' },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Fecha de publicación"
              inputType="radio"
              name="publicacion"
              options={[
                { value: 'Esta semana', label: 'Esta semana' },
                { value: 'Este mes', label: 'Este mes' },
                { value: 'Ultimos 3 meses', label: 'Ultimos 3 meses' },
                { value: 'Ultimos 6 meses', label: 'Ultimos 6 meses' },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Características generales"
              inputType="radio"
              name="caracteristicas"
              options={[
                { value: 'Aire acondicionado', label: 'Aire acondicionado' },
                { value: 'Balcón', label: 'Balcón' },
                { value: 'Amoblado', label: 'Amoblado' },
                { value: 'Calefación', label: 'Calefación' },
                { value: 'Ascensor', label: 'Ascensor' },
                { value: 'Cisterna', label: 'Cisterna' },
                { value: 'Calefación', label: 'Calefación' },
                { value: 'Ascensor', label: 'Ascensor' },
                { value: 'Cisterna', label: 'Cisterna' },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Ambientes"
              inputType="checkbox"
              name="ambientes"
              options={[
                { value: 'Almacen/Depósito', label: 'Almacen/Depósito' },
                { value: 'Cocina abierta', label: 'Cocina abierta' },
                { value: 'Baño de visistas', label: 'Baño de visistas' },
                { value: 'Cocina cerrada', label: 'Cocina cerrada' },
                { value: 'Baño principal', label: 'Baño principal' },
                { value: 'Comedor diario', label: 'Comedor diario' },
                { value: 'Cocina cerrada', label: 'Cocina cerrada' },
                { value: 'Baño principal', label: 'Baño principal' },
                { value: 'Comedor diario', label: 'Comedor diario' },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Alrededores"
              inputType="checkbox"
              name="alrededores"
              options={[
                { value: 'Áreas recreativas', label: 'Áreas recreativas' },
                { value: 'Cerca de colegios', label: 'Cerca de colegios' },
                { value: 'Banco cercano', label: 'Banco cercano' },
                {
                  value: 'Cerca de hospitales',
                  label: 'Cerca de hospitales',
                },
                { value: 'Cerca de avenidas', label: 'Cerca de avenidas' },
                { value: 'Cerca de parques', label: 'Cerca de parques' },
                {
                  value: 'Cerca de hospitales',
                  label: 'Cerca de hospitales',
                },
                { value: 'Cerca de avenidas', label: 'Cerca de avenidas' },
                { value: 'Cerca de parques', label: 'Cerca de parques' },
              ]}
              onChange={handleFilterOptions}
            />
          </form>
        </SimpleBar>
      </div>
    </div>
  );
};

const SurfaceContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 0.6em;
  gap: 12px;

  & > div:first-child {
    position: relative;
    min-width: 125px !important;

    img {
      position: absolute;
      right: 16px;
      z-index: 1;
    }

    img + div {
      width: 80%;
      position: absolute;
      left: 16px;
      z-index: 2;
    }

    svg {
      display: none;
    }
  }
`;

const SurfaceFilter = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [surfaceType, setSurfaceType] = useState('');

  const handleSurfaceChange = event => {
    setSurfaceType(event.target.value);
  };

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: 'M2', label: 'M2' },
    { value: 'Ha', label: 'Ha' },
  ];

  return (
    <div style={{ width: '100%', marginTop: '1em', gridColumn: '2 span' }}>
      <h5 style={{ fontSize: '1em', color: 'black', fontWeight: 'bold' }}>
        Superficie
      </h5>
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          marginTop: '1em',
          gap: '16px',
        }}
      >
        <CustomLabel>
          <input
            type="radio"
            name="surfaceType"
            value="Techada"
            checked={surfaceType === 'Techada'}
            onChange={handleSurfaceChange}
          />
          Techada
        </CustomLabel>
        <CustomLabel>
          <input
            type="radio"
            name="surfaceType"
            value="Total"
            checked={surfaceType === 'Total'}
            onChange={handleSurfaceChange}
          />
          Total
        </CustomLabel>
      </div>
      <SurfaceContainer>
        <CustomSelect
          id="metros cuadrados"
          name="metros cuadrados"
          value={selectedValue}
          placeholder="Medidas"
          onChange={handleChange}
          options={options}
          background="form"
        >
          <img src={arrowIcon} alt="arrow" />
        </CustomSelect>

        <CustomInputNumber
          id="from"
          name="from"
          type="number"
          placeholder="Desde"
        />
        <CustomInputNumber
          id="to"
          name="to"
          type="number"
          placeholder="Hasta"
        />
      </SurfaceContainer>
    </div>
  );
};

const NumberFeaturesFilter = ({ onChange }) => {
  const [features, setFeatures] = useState({
    dormitorios: 1,
    banos: 1,
    mediosBanos: 0,
    estacionamientos: 1,
  });

  const handleFeatureChange = (key, value) => {
    setFeatures(prev => {
      const newFeatures = { ...prev, [key]: value };
      onChange(newFeatures);
      return newFeatures;
    });
  };

  const handleChange = e => {
    onChange(e);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        marginTop: '1em',
      }}
    >
      <NumberFeatureContainer
        title="Dormitorios"
        value={features.dormitorios}
        onValueChange={value => handleFeatureChange('dormitorios', value)}
        onChange={handleChange}
      />
      <NumberFeatureContainer
        title="Baños"
        value={features.banos}
        onValueChange={value => handleFeatureChange('banos', value)}
        onChange={handleChange}
      />
      <NumberFeatureContainer
        title="Medios Baños"
        value={features.mediosBanos}
        onValueChange={value => handleFeatureChange('mediosBanos', value)}
        onChange={handleChange}
      />
      <NumberFeatureContainer
        title="Estacionamientos"
        value={features.estacionamientos}
        onValueChange={value => handleFeatureChange('estacionamientos', value)}
        onChange={handleChange}
      />
    </div>
  );
};

const NumberFeatureContainer = ({ title, value, onValueChange }) => {
  const increment = () => onValueChange(value + 1);
  const decrement = () => onValueChange(Math.max(0, value - 1)); // Evitar valores negativos

  return (
    <div>
      <h5 style={{ fontSize: '1em', color: 'black', fontWeight: 'bold' }}>
        {title}
      </h5>
      <CustomCounter>
        <button onClick={decrement}>
          <img src={removeIcon} alt="remove" />
        </button>
        <span>{value}</span>
        <button onClick={increment}>
          <img src={addIcon} alt="add" />
        </button>
      </CustomCounter>
    </div>
  );
};

PropertyFilters.propTypes = {
  filterForm: PropTypes.shape({
    tipoOperacion: PropTypes.string,
    direccionCompleta: PropTypes.string,
    tipoPropiedad: PropTypes.string,
    presupuesto: PropTypes.string,
    ordenarPor: PropTypes.string,
  }),
  setFilterForm: PropTypes.func,
  setShow: PropTypes.func,
  isOffcanvas: PropTypes.bool,
};

CustomFilter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  inputType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  name: PropTypes.string.isRequired,
};

export default PropertyFilters;
