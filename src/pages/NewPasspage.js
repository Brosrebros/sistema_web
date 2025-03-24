import AuthFormContainer from 'components/custom/AuthFormContainer/AuthFormContainer';
import NewPassForm from 'components/custom/AuthForms/NewPassForm/NewPassForm';

const ResetPasspage = () => {
  return (
    <AuthFormContainer authType={'new-pass'}>
      <NewPassForm/>
    </AuthFormContainer>
  );
};

export default ResetPasspage;
