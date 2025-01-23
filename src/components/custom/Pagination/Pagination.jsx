import React from 'react';
import SecondaryCustomButton from '../CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import {
  PaginationContainer,
  NumberSelector,
  SquareButton,
  PagesContainer,
  CircleButton,
} from './Pagination.styles';
import leftIcon from '../../../assets/img/icons/arrow-left.svg';
import rightIcon from '../../../assets/img/icons/arrow-right.svg';

function Pagination({
  totalItems,
  itemsPerPageOptions = [5, 10, 20],
  currentPage,
  canNextPage,
  canPreviousPage,
  paginationArray,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) {
  return (
    <PaginationContainer>
      {/* Selector de artículos por página */}
      <NumberSelector>
        {itemsPerPageOptions.map(option => (
          <SecondaryCustomButton
            key={option}
            variant={itemsPerPage === option ? 'white' : 'gray'}
            onClick={() => onItemsPerPageChange(option)}
          >
            {option} {' '}
            {itemsPerPage === option ? 'Artículos' : null}
          </SecondaryCustomButton>
        ))}
      </NumberSelector>

      {/* Contenedor de paginación */}
      <PagesContainer>
        {/* Botón de página anterior */}
        <SquareButton
          disabled={!canPreviousPage}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <img src={leftIcon} alt="arrow-left" />
        </SquareButton>

        {/* Números de página */}
        <NumberSelector>
          {paginationArray.map(page => (
            <CircleButton
              key={page}
              variant={currentPage === page ? 'white' : 'gray'}
              onClick={() => onPageChange(page)}
            >
              {page}
            </CircleButton>
          ))}
        </NumberSelector>

        {/* Botón de página siguiente */}
        <SquareButton
          disabled={!canNextPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src={rightIcon} alt="arrow-right" />
        </SquareButton>
      </PagesContainer>
    </PaginationContainer>
  );
}

export default Pagination;
