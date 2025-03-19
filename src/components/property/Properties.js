import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Card, Col, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import usePagination from 'hooks/usePagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBreakpoints } from 'hooks/useBreakpoints';
import { useAppContext } from 'providers/AppProvider';
import PropertyGrid from 'components/property/PropertyGrid';
import PropTypes from 'prop-types';
import CatalogCard from 'components/custom/CatalogCard/CatalogCard';
import PropertyFilters from './PropertyFilters';
import Pagination from 'components/custom/Pagination/Pagination';
import styled from 'styled-components';
import Advertising from 'components/custom/Advertising/Advertising';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import sortIcon from 'assets/img/icons/sort.svg';
import { useSearch } from 'searchContext';

const CustomLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 402px;
  gap: 24px;

  @media (max-width: 1200px) {
    background-color: #ffffff;
  }
`;

const ContainerCustom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    background-color: #ffffff;
    gap: 20px;
    padding-top: 20px;
  }
`;

const Title = styled.h4`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.19rem;
  font-weight: normal;
  color: #424242;
  margin: 0px;

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    font-size: 0.81rem;
    padding: 0px 20px;

    #mobile {
      display: flex;
    }
  }
`;

const Properties = ({ filterForm, setFilterForm, properties, title, type }) => {
  const { searchValue, setSearchValue, propertyType, setPropertyType } =
    useSearch();
  const [coursePerPage, setCoursePerPage] = useState(6);
  const navigate = useNavigate();
  const [layout, setLayout] = useState('list');

  const ordenarPorOptions = [
    { value: 'Precio ascendente', label: 'Precio ↑' },
    { value: 'Precio descendente', label: 'Precio ↓' },
    { value: 'Superficie ascendente', label: 'Superficie ↑' },
    { value: 'Superficie descendente', label: 'Superficie ↓' },
    { value: 'Fecha ascendente', label: 'Fecha ↑' },
    { value: 'Fecha descendente', label: 'Fecha ↓' },
    { value: 'Antigüedad ascendente', label: 'Antigüedad ↑' },
    { value: 'Antigüedad descendente', label: 'Antigüedad ↓' },
  ];

  const {
    config: { isNavbarVerticalCollapsed },
    setConfig,
  } = useAppContext();
  const coursesNavbarVerticalCollapsed = useRef(isNavbarVerticalCollapsed);

  const memoizedProperties = useMemo(() => properties, [properties]);

  const filteredProperties = useMemo(() => {
    return memoizedProperties.filter(property => {
      const { search, propertyType, budget } = filterForm;
      const matchesSearch = search
        ? property.title.toLowerCase().includes(search.toLowerCase())
        : true;
      const matchesType = propertyType ? property.type === propertyType : true;
      const matchesBudget = budget
        ? property.price <= parseInt(budget, 10)
        : true;
      return matchesSearch && matchesType && matchesBudget;
    });
  }, [memoizedProperties, filterForm]);

  const sortedProperties = useMemo(() => {
    return [...filteredProperties].sort((a, b) => {
      if (filterForm.orderBy === 'Precio ascendente') return a.price - b.price;
      if (filterForm.orderBy === 'Precio descendente') return b.price - a.price;
      return 0;
    });
  }, [filteredProperties, filterForm.orderBy]);

  const {
    paginationState: {
      data: paginatedCourses,
      totalItems,
      itemsPerPage,
      currentPage,
      canNextPage,
      canPreviousPage,
      paginationArray,
    },
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
  } = usePagination(sortedProperties, coursePerPage);

  const isList = layout === 'list';
  const isGrid = layout === 'grid';

  useEffect(() => {
    if (!isList && !isGrid) {
      navigate('/errors/404');
    }
    if (layout !== 'list') {
      setLayout('list');
    }
  }, [layout]);

  useEffect(() => {
    setConfig('isNavbarVerticalCollapsed', true);

    return () => {
      setConfig(
        'isNavbarVerticalCollapsed',
        coursesNavbarVerticalCollapsed.current
      );
    };
  }, []);

  return (
    <>
      <ContainerCustom>
        <Title>
          {title}

          <CustomSelect
            name="orden"
            value={propertyType}
            onChange={e => setPropertyType(e.target.value)}
            placeholder="Ordenar por"
            options={ordenarPorOptions}
            background="form"
            id="mobile"
          >
            <img src={sortIcon} width={'16px'} />
          </CustomSelect>
        </Title>

        <CustomLayout>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '16px',
              }}
            >
              {paginatedCourses.length > 0 ? (
                paginatedCourses.map((course, index) =>
                  layout === 'list' ? (
                    <>
                      <CatalogCard
                        key={course.id}
                        property={course}
                        type={type}
                      />
                      {(index + 1) % 2 === 0 && <Advertising />}
                    </>
                  ) : (
                    <Col key={course.id} md={6} xxl={4}>
                      <PropertyGrid property={course} />
                    </Col>
                  )
                )
              ) : (
                <Card className="bg-transparent shadow-none">
                  <Card.Body className="border-2 border-dashed border-400 border rounded text-center py-5">
                    <div className="fs-10">
                      <FontAwesomeIcon
                        icon="exclamation-triangle"
                        className="fs-3 mb-3"
                      />
                      <h5>No Courses Found!</h5>
                      <p className="mb-0">
                        Your search did not match any Courses. Please try again.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>
            {paginatedCourses.length > 0 && (
              <Pagination
                totalItems={100}
                itemsPerPageOptions={[5, 10, 20]}
                currentPage={currentPage}
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                paginationArray={paginationArray}
                activeValue={itemsPerPage}
                itemsPerPage={itemsPerPage}
                onPageChange={page => goToPage(page)}
                onItemsPerPageChange={value => setItemsPerPage(value)}
              />
            )}
          </div>

          <PropertyFilters
            filterForm={filterForm}
            setFilterForm={setFilterForm}
          />
        </CustomLayout>
      </ContainerCustom>
    </>
  );
};

Properties.propTypes = {
  filterForm: PropTypes.shape({
    tipoOperacion: PropTypes.string,
    direccionCompleta: PropTypes.string,
    tipoPropiedad: PropTypes.string,
    presupuesto: PropTypes.string,
    ordenarPor: PropTypes.string,
  }),
  setFilterForm: PropTypes.func,
  properties: PropTypes.object,
  title: PropTypes.string,
};

export default Properties;
