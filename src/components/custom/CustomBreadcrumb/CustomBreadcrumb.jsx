import { CustomBreadcrumbStyled } from './CustomBreadcrumb.styles';
import { useNavigate } from 'react-router-dom';
import flechaIzquierda from '../../../assets/img/icons/flechaizquierdapequeña_rojo.svg';
import flechaDerecha from '../../../assets/img/icons/flechaderechapequeña_rojo.svg';

function CustomBreadcrumb({ prevlink, link1, link2, href1 }) {
  const navigate = useNavigate();
  return (
    <CustomBreadcrumbStyled>
      <img src={flechaIzquierda} style={{ width: '.4rem', height: 'auto' }} />
      <a onClick={() => navigate(-1)}>{prevlink}</a>
      <img src={flechaDerecha} style={{ width: '.4rem', height: 'auto' }} />
      <a href={href1}>{link1}</a>
      {link2 ? (
        <>
          <img src={flechaDerecha} style={{ width: '.4rem', height: 'auto' }} />
          <a href="#">{link2}</a>
        </>
      ) : null}
    </CustomBreadcrumbStyled>
  );
}

export default CustomBreadcrumb;
