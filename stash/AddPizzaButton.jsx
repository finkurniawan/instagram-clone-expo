import { View, Text, Pressable } from "react-native";
import React from "react";

// const AddPizzaButton = ({ setIsHovered }) => {
const AddPizzaButton = (props) => {
  const { setIsHovered } = props; // alternative
  return (
    <Pressable
      style={{
        backgroundColor: props.isHovered ? "darkturquoise" : "lightblue",
        //   width: 50,
        //   margin: 100,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10,
        position: "absolute",
        bottom: 0,
      }}
      onPress={(event) => {
        props.setPizzaList([...props.pizzaList, "Pizza"]);
      }}
      onHoverIn={() => {
        setIsHovered(true);
      }}
      onHoverOut={() => {
        setIsHovered(false);
      }}
    >
      <Text>Add Pizza</Text>
    </Pressable>
  );
};

export default AddPizzaButton;
