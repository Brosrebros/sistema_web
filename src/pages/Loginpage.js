import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import LoginForm from 'components/custom/AuthForms/LoginForm/LoginForm';

const Loginpage = () => {
  return (
    <AuthFormContainer authType={'login'}>
      <LoginForm />
    </AuthFormContainer>
  );
};

export default Loginpage;
