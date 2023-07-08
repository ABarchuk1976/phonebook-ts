import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/operations';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
    evt.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Email
        <StyledInput
          type="email"
          name="email"
          autoComplete="off"
          placeholder="enter your email..."
          required
        />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="enter a password..."
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Log In</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
