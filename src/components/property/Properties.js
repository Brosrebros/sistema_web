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
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import { useFilter } from 'filterContext';
import { translate } from 'react-range/lib/utils';

const CustomLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 402px;
  gap: 24px;

  #mobile {
    display: none;
  }

  @media (max-width: 1200px) {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    #mobile {
      display: flex;
    }

    & > div:nth-child(3) {
      top: 0;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.26);
      opacity: ${({ state }) => (state ? 1 : 0)};
      pointer-events: ${({ state }) => (state ? 'all' : 'none')};
      transition: all 0.3s ease-in-out;
    }

    & > div:nth-child(4) {
      top: 0;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.26);
      opacity: ${({ isActive }) => (isActive ? 1 : 0)};
      pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
      transition: all 0.3s ease-in-out;
    }
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

const OrderOptions = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  border-radius: 12px 12px 0px 0px;
  transform: ${({isActive}) => isActive ? "translateY(0)" : "translateY(100%)"};
  transition: all 0.3s ease-in-out;

  & > div:first-child {
    width: 100%;
    padding: 8px;

    & > span {
      width: 60px;
      height: 4px;
      background-color: #c3c3c3;
      border-radius: 100px;
      display: block;
      margin: 0 auto;
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 12px 0px;

    & > h4 {
      font-weight: 700;
      font-size: 0.94rem;
      line-height: 100%;
      color: black;
      margin: 0px;
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px 16px;
        height: 33px;
        font-weight: 400;
        font-size: 0.81rem;
        line-height: 154%;
        color: #424242;
      }
    }
  }
`;

const Properties = ({ filterForm, setFilterForm, properties, title, type }) => {
  const { state, toggleState } = useFilter();
  const { searchValue, setSearchValue, propertyType, setPropertyType } =
    useSearch();
  const [coursePerPage, setCoursePerPage] = useState(6);
  const navigate = useNavigate();
  const [layout, setLayout] = useState('list');
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

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

          <SecondaryCustomButton id="mobile" onClick={() => handleActive()}>
            <img src={sortIcon} alt="sort" />
          </SecondaryCustomButton>
        </Title>

        <CustomLayout state={state} isActive={isActive}>
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

          <div id="mobile" onClick={() => toggleState()}></div>
          <div id="mobile" onClick={() => handleActive()}></div>
        </CustomLayout>
        <OrderOptions isActive={isActive}>
          <div>
            <span></span>
          </div>
          <div>
            <h4>Ordenar por</h4>
            <div>
              <span>Precio ↑</span>
              <span>Precio ↓</span>
              <span>Superficie ↑</span>
              <span>Superficie ↓</span>
            </div>
          </div>
        </OrderOptions>
      </ContainerCustom>
    </>
  );
};

export default Properties;
