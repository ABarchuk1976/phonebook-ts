import {
  AppTitle,
  Container,
  HeaderWrapper,
  Title,
} from '../components/common.styled';

const Home = () => {
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
