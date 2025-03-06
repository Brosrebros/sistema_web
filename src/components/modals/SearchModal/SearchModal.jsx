import React, { useState } from 'react';

import { useModal } from 'modalContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from 'routes/paths';

import ModalContainer from 'components/custom/ModalContainer/ModalContainer';
import { SearchModalContainer, CloseButton } from './SearchModal.styles';

import PrimaryCustomButton from 'components/custom/CustomButtons/PrimaryCustomButton/PrimaryCustomButton';
import SecondaryCustomButton from 'components/custom/CustomButtons/SecondaryCustomButton/SecondaryCustomButton';
import CustomSelect from 'components/custom/CustomSelect/CustomSelect';
import CustomInput from 'components/custom/CustomFormUI/CustomInput/CustomInput';
import CustomCheck from 'components/custom/CustomFormUI/CustomCheck/CustomCheck';

import pinIcon from 'assets/img/icons/location.svg';
import closeIcon from 'assets/img/icons/close.svg';
import arrowRight from 'assets/img/icons/arrow-right-red.svg';
import tipoIcon from 'assets/img/icons/signpost.svg';
import arrowLeft from 'assets/img/icons/arrow-left.svg';

function SearchModal() {
  const { modals, closeModal } = useModal();
  if (!modals.searchModal) return null;

  const navigate = useNavigate();

  const [propertyType, setPropertyType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = () => {
    setActiveStep(prev => prev + 1);
  };

  const propiedadOptions = [
    { value: 'Casa', label: 'Casa' },
    { value: 'Departamento', label: 'Departamento' },
    { value: 'Oficina', label: 'Oficina' },
    { value: 'Terreno', label: 'Terreno' },
    { value: 'Local comercial', label: 'Local comercial' },
    { value: 'Bodega', label: 'Bodega' },
    { value: 'Edificio', label: 'Edificio' },
    { value: 'Casa de campo', label: 'Casa de campo' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Loft', label: 'Loft' },
    { value: 'Villa', label: 'Villa' },
    { value: 'Dúplex', label: 'Dúplex' },
    { value: 'Chalet', label: 'Chalet' },
  ];

  return (
    <ModalContainer>
      <motion.div
        initial={{ y: 1080, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 1080, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.3, 0.3, 0.6, 1] }}
      >
        <SearchModalContainer onClick={e => e.stopPropagation()}>
          {activeStep === 1 ? (
            <CloseButton
              onClick={() => {
                closeModal('settingsModal');
                setActiveStep(1);
              }}
            >
              <img src={closeIcon} alt="close" />
            </CloseButton>
          ) : (
            <CloseButton onClick={() => setActiveStep(activeStep - 1)}>
              <img src={arrowLeft} alt="close" />
            </CloseButton>
          )}

          {activeStep === 1 ? (
            <h3>¿En donde lo buscas?</h3>
          ) : activeStep === 2 ? (
            <h3>¿Qué tipo de inmueble estas buscando?</h3>
          ) : activeStep === 3 ? (
            <h3>Añade algún filtro adicional</h3>
          ) : null}
          <div>
            {activeStep === 1 ? (
              <CustomInput
                placeholder={'¿En dónde lo buscas?'}
                icon={pinIcon}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
            ) : activeStep === 2 ? (
              <CustomSelect
                id="tipoPropiedad"
                name="tipoPropiedad"
                value={propertyType}
                onChange={e => setPropertyType(e.target.value)}
                placeholder="Tipo de propiedad"
                options={propiedadOptions}
                background="form"
              >
                <img src={tipoIcon} width={'16px'} />
              </CustomSelect>
            ) : (
              <div
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)',
                  gap: '19px',
                }}
              >
                <CustomCheck
                  type="checkbox"
                  label="Piscina"
                  htmlFor="piscina"
                />

                <CustomCheck
                  type="checkbox"
                  label="Agua potable"
                  htmlFor="agua"
                />

                <CustomCheck type="checkbox" label="Cable" htmlFor="cable" />

                <CustomCheck
                  type="checkbox"
                  label="Electricidad"
                  htmlFor="electricidad"
                />

                <CustomCheck
                  type="checkbox"
                  label="Baño de visitas"
                  htmlFor="baño"
                />

                <CustomCheck
                  type="checkbox"
                  label="Banco cercano"
                  htmlFor="banco"
                />
              </div>
            )}

            <div>
              {activeStep === 3 ? (
                <></>
              ) : (
                <PrimaryCustomButton onClick={() => handleActiveStep()}>
                  Continuar
                </PrimaryCustomButton>
              )}

              <SecondaryCustomButton
                color="white"
                onClick={() => {
                  navigate(`/${rootPaths.catalogRoot}`);
                  closeModal('settingsModal');
                }}
              >
                Ver resultados
                <img src={arrowRight} alt="arrow" />
              </SecondaryCustomButton>
            </div>
          </div>
        </SearchModalContainer>
      </motion.div>
    </ModalContainer>
  );
}

export default SearchModal;
