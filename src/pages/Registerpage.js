import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import RegisterForm from 'components/custom/AuthForms/RegisterForm/RegisterForm';

const Registerpage = () => {
  return (
    <AuthFormContainer authType={'register'}>
      <RegisterForm />
    </AuthFormContainer>
  );
};

export default Registerpage;
