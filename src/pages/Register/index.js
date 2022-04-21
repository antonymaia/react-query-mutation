import { View } from "react-native";
import { useMutation } from "react-query";
import { useState } from "react";
import axios from "axios";
import { RadioButton } from "react-native-paper";
import { Button } from "@rneui/base";
import { Container, Form, InputContainer, Text, Input } from "./styles";

export default function Register({ navigation }) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");

  const mutationPost = useMutation((newUser) => {
    const TOKEN =
      "a1e5204be15a36c77cd51fc143554189c1cf360afc9e25c033949510adff8e95";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    };
    return axios.post("https://gorest.co.in/public/v2/users", newUser, {
      headers: headers,
    });
  });

  const submit = () => {
    if (id === 0) {
      mutationPost.mutate({
        name: name,
        email: email,
        gender: gender,
        status: "active",
      });
    }
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Form>
        <InputContainer>
          <Text>Name:</Text>
          <Input onChangeText={(text) => setName(text)} />
        </InputContainer>
        <InputContainer>
          <Text>Email:</Text>
          <Input onChangeText={(text) => setEmail(text)} />
        </InputContainer>
        <InputContainer>
          <Text>Male</Text>
          <RadioButton
            value="male"
            status={gender === "male" ? "checked" : "unchecked"}
            onPress={() => setGender("male")}
          />
          <Text>Female</Text>
          <RadioButton
            value="female"
            status={gender === "female" ? "checked" : "unchecked"}
            onPress={() => setGender("female")}
          />
        </InputContainer>
        <View>
          <Button
            title="Cadastrar"
            onPress={submit}
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
              borderRadius: 10,
            }}
          />
        </View>
      </Form>
    </Container>
  );
}
