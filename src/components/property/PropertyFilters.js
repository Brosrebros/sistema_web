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
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import { useFilter } from 'filterContext';

const FiltersContainer = styled.div`
  width: 100%;
  position: relative;

  #mobile {
    display: none;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    border-radius: 12px;
    background-color: white;
    padding: 24px;
    position: sticky;
    top: 95px;
    height: calc(100vh - 120px);
    overflow: hidden;

    & > div:nth-child(3) {
      width: 100%;
      height: calc(-260px + 100vh);
    }

    & > div:first-child {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    position: fixed;
    display: flex;
    align-items: flex-end;
    bottom: 0;
    z-index: 1;
    transform: ${({ state }) => (state ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.3s ease-in-out;

    & > div:last-child {
      width: 100vw;
      padding: 20px;
      max-height: 832px;
      border-radius: 12px 12px 0px 0px;

      & > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20px;
        margin-top: -20px;
        padding: 8px;

        & > span {
          display: block;
          width: 60px;
          height: 4px;
          border-radius: 100px;
          background-color: #c3c3c3;
        }
      }

      & > div:nth-child(3) {
        width: 100%;
        height: calc(-320px + 100vh);
      }
    }

    #mobile {
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #c3c3c3;
      padding: 16px 20px;
      position: absolute;
      height: 80px;
      background-color: #ffffff;
      bottom: 0;

      & > button {
        width: 100%;
      }
    }
  }
`;

const FiltersHeader = styled.div`
  width: 100%;
  padding: 12px;
  background-color: #f2f2f2;
  border-radius: 12px;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      img {
        width: 20px;
        height: 20px;
      }

      h4 {
        font-weight: 700;
        font-size: 1.19em;
        line-height: 116%;
        color: black;
        margin: 0px;
      }
    }
  }
`;

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

  const { state } = useFilter();

  return (
    <FiltersContainer state={state}>
      <div>
        <div>
          <span></span>
        </div>
        <FiltersHeader>
          <div>
            <div>
              <img src={filterIcon} />
              <h4>Más filtros</h4>
            </div>
            <PrimaryCustomButton
              onClick={() => setFilterOptions([])}
              variant="primary"
            >
              <img src={resetIcon} style={{ width: '20px', height: '20px' }} />
              Reiniciar
            </PrimaryCustomButton>
          </div>
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
        </FiltersHeader>
        <SimpleBar>
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
        <div id="mobile">
          <PrimaryCustomButton>Ver resultados</PrimaryCustomButton>
        </div>
      </div>
    </FiltersContainer>
  );
};

const SurfaceContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 1em;
  gap: 12px;
  padding-right: 2px;

  & > div:first-child {
    display: flex;
    min-width: 125px !important;
  }
`;

const SurfaceFilterContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  grid-column: span 2;

  & > h5 {
    margin: 0px;
    font-size: 1em;
    color: black;
    font-weight: bold;
    line-height: 11px;

    @media (max-width: 1200px) {
      font-size: 0.81rem;
      line-height: 9px;
    }
  }

  @media (max-width: 1200px) {
    & > div:nth-child(2) {
      display: flex !important;
      flex-direction: column;
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
    <SurfaceFilterContainer>
      <h5>Superficie</h5>
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
        />

        <CustomInput placeholder="Desde" type="text" />
        <CustomInput placeholder="Hasta" type="text" />
      </SurfaceContainer>
    </SurfaceFilterContainer>
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

const NumberFeature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  & > h5 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 11px;
    color: black;
    margin: 0px;
  }

  @media (max-width: 1200px) {
    gap: 12px;

    & > h5 {
      font-size: 0.81rem;
      line-height: 9px;
    }
  }
`;

const NumberFeatureContainer = ({ title, value, onValueChange }) => {
  const increment = () => onValueChange(value + 1);
  const decrement = () => onValueChange(Math.max(0, value - 1)); // Evitar valores negativos

  return (
    <NumberFeature>
      <h5>{title}</h5>
      <CustomCounter>
        <button onClick={decrement}>
          <img src={removeIcon} alt="remove" />
        </button>
        <span>{value}</span>
        <button onClick={increment}>
          <img src={addIcon} alt="add" />
        </button>
      </CustomCounter>
    </NumberFeature>
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
