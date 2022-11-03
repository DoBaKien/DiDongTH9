import { Button, View } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ display: "flex", justifyContent: "space-evenly", flex: 1 }}>
      <Button
        title="Cau 1"
        onPress={() => {
          navigation.navigate("Cau1");
        }}
      />
      <Button
        title="Cau 2"
        onPress={() => {
          navigation.navigate("Cau2");
        }}
      />
      <Button
        title="Cau 3"
        onPress={() => {
          navigation.navigate("Cau3");
        }}
      />
    </View>
  );
}

export default Home;
