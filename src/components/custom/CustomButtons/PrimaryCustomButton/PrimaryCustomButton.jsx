import { PrimaryCustomButtonStyled } from './PrimaryCustomButton.styles';

function PrimaryCustomButton({ children, onClick, id }) {
  return (
    <PrimaryCustomButtonStyled onClick={onClick} type="submit" id={id}>
      {children}
    </PrimaryCustomButtonStyled>
  );
}

export default PrimaryCustomButton;
