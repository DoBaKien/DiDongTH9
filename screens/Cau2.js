import { useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import icon from "../assets/cat.png";
import icon1 from "../assets/cat1.png";
import icon2 from "../assets/cat2.png";
export default function Cau2() {
  const [location1, setLocation1] = useState({
    marginLeft1: new Animated.Value(10),
    marginTop1: new Animated.Value(10),
  });
  const [location2, setLocation2] = useState({
    marginLeft2: new Animated.Value(10),
    marginTop2: new Animated.Value(10),
  });
  const [location3, setLocation3] = useState({
    marginLeft3: new Animated.Value(10),
    marginTop3: new Animated.Value(10),
  });

  function onPress() {
    const x1 = getRndInteger(0, 300);
    const y1 = getRndInteger(0, 500);
    const x2 = getRndInteger(0, 100);
    const y2 = getRndInteger(0, 200);
    const x3 = getRndInteger(0, 300);
    const y3 = getRndInteger(0, 500);

    setLocation1({
      marginLeft1: x1,
      marginTop1: y1,
    });
    setLocation2({
      marginLeft2: x2,
      marginTop2: y2,
    });
    setLocation3({
      marginLeft3: x3,
      marginTop3: y3,
    });
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;
  const { marginTop3, marginLeft3 } = location3;
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ position: "absolute" }}>
        <Animated.Image
          source={icon}
          style={{
            left: marginLeft1,
            top: marginTop1,
            height: 80,
            width: 80,
          }}
          onStartShouldSetResponder={() => true}
          onResponderGrant={onPress}
        ></Animated.Image>
        <Animated.Image
          source={icon1}
          style={{
            left: marginLeft2,
            top: marginTop2,
            height: 80,
            width: 80,
          }}
          onStartShouldSetResponder={() => true}
          onResponderGrant={onPress}
        ></Animated.Image>
        <Animated.Image
          source={icon2}
          style={{
            left: marginLeft3,
            top: marginTop3,
            height: 80,
            width: 80,
          }}
          onStartShouldSetResponder={() => true}
          onResponderGrant={onPress}
        ></Animated.Image>
      </View>
    </View>
  );
}
