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
    </View>
  );
}

export default Home;
