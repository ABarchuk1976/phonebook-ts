import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/operations';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.currentTarget.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    evt.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Name:
        <StyledInput
          type="text"
          name="name"
          autoComplete="off"
          placeholder="enter your name..."
          required
        />
      </StyledLabel>
      <StyledLabel>
        Email:
        <StyledInput
          type="email"
          name="email"
          autoComplete="off"
          placeholder="enter your email..."
          required
        />
      </StyledLabel>
      <StyledLabel>
        Password:
        <StyledInput
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="7 characters or longer..."
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
