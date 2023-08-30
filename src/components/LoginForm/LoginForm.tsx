import { FC, SyntheticEvent } from 'react';
import { IAuthFormElements } from '../../helpers/interfaces/common/interfaces';

import { logIn } from '../../redux/auth/operations';
import { useAppDispatch } from '../hooks';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './LoginForm.styled';

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

		const form = evt?.currentTarget as HTMLFormElement;
    const { email, password } = form.elements as IAuthFormElements;

    void dispatch(logIn({ email: email.value, password: password.value }));
    form.reset();
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
