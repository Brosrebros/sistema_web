import { PrimaryCustomButtonStyled } from './PrimaryCustomButton.styles';

function PrimaryCustomButton({ children, onClick }) {
  return (
    <PrimaryCustomButtonStyled onClick={onClick} type="submit">
      {children}
    </PrimaryCustomButtonStyled>
  );
}

export default PrimaryCustomButton;
