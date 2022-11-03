import { useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import icon from "../assets/cat.png";

export default function Cau1() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    var x = evt.nativeEvent.locationX;

    var y = evt.nativeEvent.locationY;
    setLocation({
      x: x,
      y: y,
      marginLeft: x - 60,
      marginTop: y - 60,
    });
  }
  function onMove(evt) {}
  function onRelease() {}
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <Text style={{}}>Show something!</Text>

      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          height: 100,
          width: 100,
        }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
  },
});
