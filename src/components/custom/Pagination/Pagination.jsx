import React, { useEffect, useState } from 'react';
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
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(
    itemsPerPageOptions[0]
  );

  // useEffect(() => {
  //   onItemsPerPageChange(selectedItemsPerPage);
  // }, [selectedItemsPerPage, onItemsPerPageChange]);

  return (
    <PaginationContainer>
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
