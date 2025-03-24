import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import ResetForm from 'components/custom/AuthForms/ResetForm/ResetForm';

const ResetPasspage = () => {
  return (
    <AuthFormContainer authType={'reset'}>
      <ResetForm />
    </AuthFormContainer>
  );
};

export default ResetPasspage;
