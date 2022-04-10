import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useMutation } from "react-query";
import { useState } from "react";
import axios from "axios";
import { RadioButton } from "react-native-paper";

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
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Male</Text>
          <RadioButton
            value="male"
            status={gender === "male" ? "checked" : "unchecked"}
            onPress={() => setGender("male")}
          />
          <Text style={styles.label}>Female</Text>
          <RadioButton
            value="female"
            status={gender === "female" ? "checked" : "unchecked"}
            onPress={() => setGender("female")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={submit} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363636",
    alignItems: "center",
  },
  formContainer: {
    width: "85%",
    maxWidth: 400,
    padding: 10,
    marginTop: 30,
    borderRadius: 3,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#363636",
  },
  input: {
    borderWidth: 1,
    borderColor: "#363636",
    fontSize: 16,
    padding: 10,
    borderRadius: 3,
  },
  buttonContainer: {
    marginTop: 30,
  },
});
