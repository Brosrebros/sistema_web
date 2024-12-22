import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        style={{
          background: 'none',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          color: '#93000A',
        }}
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack />
      </button>
    </>
  );
};

export default BackButton;
