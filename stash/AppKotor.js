import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";

import Images from "../assets/images";

const BadutComponent = () => {
  return (
    <View
      // @ts-ignore
      style={{
        backgroundColor: "lime",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Text>🤡</Text>
      <Text>🤡</Text>
      <Text>🤡</Text>
    </View>
  );
};

const KucingComponent = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        gap: 50,
      }}
    >
      {/* TODO: change to Text */}
      <View>😸</View>
      <View>😸</View>
      <View>😸</View>
    </View>
  );
};

const RakitComponent = () => {
  return (
    <View style={{ backgroundColor: "yellow", height: "80%", gap: 50 }}>
      <Text>
        Hello World{" "}
        <Text style={{ fontWeight: "bold", fontFamily: "xxx" }}>
          I am BOLD and Brave
        </Text>
      </Text>

      <Text numberOfLines={2}>
        Berakit-rakit ke hulu, berenang-renang ke tepian. Bersakit-sakit dahulu,
        bersenang-senang kemudian. Arti peribahasa ini adalah jika ingin
        mendapatkan keberhasilan, harus berani bersusah payah dulu.
      </Text>

      <Text numberOfLines={1} ellipsizeMode="middle">
        Berakit-rakit ke hulu, berenang-renang ke tepian. Bersakit-sakit dahulu,
        bersenang-senang kemudian. Arti peribahasa ini adalah jika ingin
        mendapatkan keberhasilan, harus berani bersusah payah dulu.
      </Text>
    </View>
  );
};

const PragosComponent = () => (
  <View style={{ height: 500, width: 500, backgroundColor: "yellow" }}>
    <Image
      style={{ height: 500, width: 500 }}
      source={{
        uri: "https://i.pinimg.com/736x/22/8c/a4/228ca4e9d0944c1838c99972bdf4e428.jpg",
      }}
      resizeMode="repeat"
    />
  </View>
);

const App = () => {
  const buttonRef = useRef();
  const [input, setInput] = useState("");
  var inputVar = "";
  return (
    // <View style={{ height: 100, width: 100, backgroundColor: "yellow" }} />
    <View
      style={{
        flex: 1,
        backgroundColor: "grey",
        // flexDirection: "column", // default
        // padding: 50,
      }}
    >
      {/* <View> */}
      <ScrollView>
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
        <PragosComponent />
      </ScrollView>
      <Image
        style={{ height: 150, width: 150 }}
        // source={require("./assets/adaptive-icon.png")}
        source={Images.icon}
      />
      {/* </View> */}
      <View
        style={{
          position: "absolute",
          backgroundColor: "yellow",
          // top: 0,
          // left: 0, default
          bottom: 0,
          right: 0,
          height: 50,
          width: 50,
          zIndex: 1,
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "blue",
          // top: 0,
          // left: 0, default
          bottom: 0,
          right: 0,
          height: 50,
          width: 50,
          zIndex: 0,
        }}
      />
      <TextInput
        ref={buttonRef}
        style={{
          height: 20,
          borderColor: "red",
          borderWidth: 3,
          borderStyle: "solid",
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        value={input}
        onChangeText={(newText) => {
          setInput(newText);
        }}
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
        }}
        onPress={() => {
          console.log("buttonRef", buttonRef);
          if (buttonRef.current) {
            // @ts-ignore
            buttonRef.current.clear();
          }
        }}
      >
        <Text>Clear Button</Text>
      </TouchableOpacity>
      {/* <BadutComponent />
      {KucingComponent()}
      <RakitComponent /> */}
    </View>
  );
};

export default App;
