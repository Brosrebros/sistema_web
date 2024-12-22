import { CustomBreadcrumbStyled } from './CustomBreadcrumb.styles';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function CustomBreadcrumb({ prevlink, link1, link2, href1 }) {
  const navigate = useNavigate();
  return (
    <CustomBreadcrumbStyled>
      <a onClick={() => navigate(-1)}>{prevlink}</a>
      <FiChevronRight />
      <a href={href1} >{link1}</a>
      {link2 ? (
        <>
          <FiChevronRight />
          <a href="#">{link2}</a>
        </>
      ) : null}
    </CustomBreadcrumbStyled>
  );
}

export default CustomBreadcrumb;
