import { FC, SyntheticEvent } from 'react';
import { IAuthFormElements } from '../../helpers/interfaces/common/interfaces';
import { register } from '../../redux/auth/operations';
import { useAppDispatch } from '../hooks';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './RegisterForm.styled';

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

		const form = evt?.currentTarget as HTMLFormElement;
    const { name, email, password } = form.elements as IAuthFormElements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    form.reset();
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
          placeholder="6 characters or longer..."
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
