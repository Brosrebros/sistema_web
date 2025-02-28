import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import LoginForm from 'components/custom/AuthForms/LoginForm/LoginForm';
import LoginBanner from 'components/custom/LoginBanner/LoginBanner';
import styled from 'styled-components';

const LoginpageContainer = styled.div`
  width: 100%;
  max-width: 1270px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  & > div:last-child {
    padding: 40px 40px;
  }
`;

const Loginpage = () => {
  return (
    <LoginpageContainer>
      <LoginBanner />
      <div>
        <AuthFormContainer authType={'login'}>
          <LoginForm />
        </AuthFormContainer>
      </div>
    </LoginpageContainer>
  );
};

export default Loginpage;
