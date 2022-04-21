import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./src/pages/Home";
import Register from "./src/pages/Register";
import { ThemeProvider } from "styled-components";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const theme = {
  background: "#140E2B",
  secundaryColor: "#402D8A",
  textColor: "#f9f9f1",
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
