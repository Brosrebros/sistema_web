import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import RegisterForm from 'components/custom/AuthForms/RegisterForm/RegisterForm';
import LoginBanner from 'components/custom/LoginBanner/LoginBanner';
import styled from 'styled-components';

const RegisterpageContainer = styled.div`
  width: 100%;
  max-width: 1270px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  & > div:last-child {
    padding: 40px 40px;
  }
`;

const Registerpage = () => {
  return (
    <RegisterpageContainer>
      <LoginBanner />
      <div>
        <AuthFormContainer authType={'register'}>
          <RegisterForm />
        </AuthFormContainer>
      </div>
    </RegisterpageContainer>
  );
};

export default Registerpage;
