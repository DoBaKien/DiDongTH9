import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cau1 from "./screens/Cau1";
import Cau2 from "./screens/Cau2";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Cau1" component={Cau1}></Stack.Screen>
        <Stack.Screen name="Cau2" component={Cau2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
