import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button,Card } from 'react-bootstrap';
// import { slugifyText } from 'helpers/utils';
import Flex from 'components/common/Flex';
import SubtleBadge from 'components/common/SubtleBadge';
// import { usePropertyContext } from 'providers/PropertyProvider';
import { HiOutlineFilter } from 'react-icons/hi';
import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import { IoMdAdd } from 'react-icons/io';
import { IoIosRemove } from 'react-icons/io';
import CustomLabel from 'components/custom/CustomFormUI/CustomLabel/CustomLabel';
import CustomCounter from 'components/custom/CustomFormUI/CustomCounter/CustomCounter';
import CustomFilter from 'components/custom/CustomFormUI/CustomFilter/CustomFilter';
import CustomInputNumber from 'components/custom/CustomFormUI/CustomInputNumber/CustomInputNumber';

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
  }, [filterOptions]);

  return (
    <Card className="course-filter">
      <SimpleBar style={{ height: '100%' }}>
        <Card.Header
          as={Flex}
          className="flex-between-center pt-x1"
          style={{ borderBottom: '1px solid #D6D6D6', flexDirection: 'column' }}
        >
          <Flex
            className="gap-4 flex-xl-grow-1 align-items-center justify-content-xl-between"
            style={{ width: '100%' }}
          >
            <h4
              className="mb-0 fs-9 d-flex align-items-center"
              style={{ color: '#1e1e1e', fontWeight: 'bold', gap: '6px' }}
            >
              <HiOutlineFilter />
              <span style={{ fontSize: '1.1em' }}>Más filtros</span>
            </h4>
            <PrimaryCustomButton
              onClick={() => setFilterOptions([])}
              variant="primary"
            >
              <FontAwesomeIcon icon="redo-alt" className="me-1 fs-11" />
              Reset
            </PrimaryCustomButton>
          </Flex>
          {isOffcanvas && (
            <Button
              onClick={() => setShow(false)}
              className="btn-close text-reset"
              size="sm"
              variant="link"
            ></Button>
          )}
          {filterOptions.length > 0 && (
            <Flex
              wrap="wrap"
              className="gap-2 mb-3"
              style={{ width: '100%', marginTop: '1em' }}
            >
              {filterOptions.map((tag, idx) => (
                <SubtleBadge key={`${tag.name}-${idx}`} pill={false}>
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
                    <FontAwesomeIcon icon="times" className="ms-1 fs-11" />
                  </Button>
                </SubtleBadge>
              ))}
            </Flex>
          )}
        </Card.Header>
        <Card.Body className="py-0">
          <form
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
              title="Superficie"
              inputType="radio"
              name="superficie"
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
              title="Ambientes"
              inputType="checkbox"
              name="ambiente"
              options={[
                { value: 'Bodega', label: 'Bodega' },
                { value: 'Area de cafeteria', label: 'Área de cafetería' },
                { value: 'Patio', label: 'Patio' },
                { value: 'Area común', label: 'Área común' },
                { value: 'Baño propio', label: 'Baño propio' },
                { value: 'Cuarto de juegos', label: 'Cuarto de juegos' },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Exteriores"
              inputType="checkbox"
              name="amenities"
              options={[
                { value: 'Area BBQ', label: 'Area BBQ' },
                { value: 'Balcon', label: 'Balcón' },
                { value: 'Cancha', label: 'Cancha' },
                { value: 'Jardín privado', label: 'Jardín privado' },
                { value: 'Laguna', label: 'Laguna' },
                {
                  value: 'Piscina al aire libre',
                  label: 'Piscina al aire libre',
                },
              ]}
              onChange={handleFilterOptions}
            />
            <CustomFilter
              title="Exteriores"
              inputType="checkbox"
              name="amenities"
              options={[
                { value: 'Area de lavandería', label: 'Area de lavandería' },
                { value: 'Control de acceso', label: 'Control de acceso' },
              ]}
              onChange={handleFilterOptions}
            />
          </form>
        </Card.Body>
      </SimpleBar>
    </Card>
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

const SurfaceFilter = () => {
  const options = [
    { value: 'M²', label: 'M²' },
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
          gap: '8px',
        }}
      >
        <CustomLabel>
          <input type="radio" name="surfaceType" value="Techada" />
          Techada
        </CustomLabel>
        <CustomLabel>
          <input type="radio" name="surfaceType" value="Total" />
          Total
        </CustomLabel>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          marginTop: '.6em',
          gap: '12px',
        }}
      >
        <CustomSelect
          options={options}
          placeholder="M²"
          name="surfaceType"
          background="form"
        />
        <CustomInputNumber id="from" type="number" placeholder="Mín." />
        <CustomInputNumber id="to" type="number" placeholder="Máx." />
      </div>
    </div>
  );
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
      onChange(newFeatures); // Llamamos a onChange para notificar al componente padre
      return newFeatures;
    });
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
      />
      <NumberFeatureContainer
        title="Baños"
        value={features.banos}
        onValueChange={value => handleFeatureChange('banos', value)}
      />
      <NumberFeatureContainer
        title="Medios Baños"
        value={features.mediosBanos}
        onValueChange={value => handleFeatureChange('mediosBanos', value)}
      />
      <NumberFeatureContainer
        title="Estacionamientos"
        value={features.estacionamientos}
        onValueChange={value => handleFeatureChange('estacionamientos', value)}
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
          <IoIosRemove />
        </button>
        <span>{value}</span>
        <button onClick={increment}>
          <IoMdAdd />
        </button>
      </CustomCounter>
    </div>
  );
};

// const FilterItem = ({ filter, index, filterOptions, handleFilterOptions }) => {
//   const {
//     propertyState: { filters },
//   } = usePropertyContext();

//   return (
//     <li
//       className={`${filters.length - 1 !== index}`}
//       style={{ padding: '16px 0px' }}
//     >
//       {filter.options &&
//         filter.options.map(option => (
//           <li key={slugifyText(option.label)} style={{ width: '100%' }}>
//             <Form.Check type={option.type} className="form-check d-flex ps-0">
//               <Form.Check.Label
//                 className="fs-10 flex-1 text-truncate"
//                 htmlFor={`filter-${slugifyText(filter.label)}-${slugifyText(
//                   option.label
//                 )}`}
//               >
//                 {option.label}
//               </Form.Check.Label>

//               <Form.Check.Input
//                 type={option.type}
//                 onChange={e => handleFilterOptions(e)}
//                 checked={
//                   option.type === 'checkbox'
//                     ? filterOptions.some(({ value }) => option.value === value)
//                     : undefined
//                 }
//                 id={`filter-${slugifyText(filter.label)}-${slugifyText(
//                   option.label
//                 )}`}
//                 name={option.name}
//                 value={option.value}
//               />
//             </Form.Check>
//           </li>
//         ))}
//     </li>
//   );
// };

// FilterItem.propTypes = {
//   index: PropTypes.number,
//   filter: PropTypes.shape({
//     label: PropTypes.string,
//     options: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string,
//         name: PropTypes.string,
//         type: PropTypes.string,
//         value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//       })
//     ),
//   }),
//   handleFilterOptions: PropTypes.func,
//   filterOptions: PropTypes.array,
// };

export default PropertyFilters;
