import { FC } from 'react';
import {
  AppTitle,
  Container,
  HeaderWrapper,
  Title,
} from '../components/common.styled';

const Home: FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <AppTitle>Magic Phone book</AppTitle>
        <Title>Login to access to your contacts.</Title>
      </HeaderWrapper>
    </Container>
  );
};

export default Home;
