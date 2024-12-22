import { CustomTextCardStyled } from './CustomTextCard.styles';
import { FiChevronRight } from 'react-icons/fi';

function CustomTextCard({ title, children, link, icon }) {
  return (
    <CustomTextCardStyled href={link}>
      <h4>
        {title}
        {icon ? <FiChevronRight /> : null}
      </h4>
      {children}
    </CustomTextCardStyled>
  );
}

export default CustomTextCard;
