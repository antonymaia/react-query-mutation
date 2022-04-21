import { Container, Button, Image } from './styles'

export default function Home({ navigation }) {
  return (
    <Container>
        <Button
          onPress={() => navigation.navigate("Register")}
        >
          <Image
            source={require("../../assets/images/person_add_white.png")}
          />
        </Button>
    </Container>
  );
};

