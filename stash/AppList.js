import { useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import AddPizzaButton from "./AddPizzaButton";
import SectionListDemo from "./SectionListDemo";
import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";

const ScrollViewComponent = ({ pizzaList }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
        Scroll View
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {["🍕", "🍕", "🍕", "🍕"]} */}
        {/* {[
        <Text>{"🍕"}</Text>,
        <Text>{"🍕"}</Text>,
        <Text>{"🍕"}</Text>,
        <Text>{"🍕"}</Text>,
      ]} */}
        {pizzaList.map((_item, index) => {
          return (
            <Text key={`${index}-${index % 2 ? "🍕" : "🐟"}`}>
              {index % 2 ? "🍕🍕🍕🍕🍕\n".repeat(5) : "🐟🐟🐟🐟🐟\n".repeat(5)}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const FlastListComponent = ({ pizzaList }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>Flat List</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pizzaList}
        renderItem={({ item, index }) => {
          return (
            <Text key={`${index}-${index % 2 ? "🍕" : "🐟"}`}>
              {index % 2 ? "🍕🍕🍕🍕🍕\n".repeat(5) : "🐟🐟🐟🐟🐟\n".repeat(5)}
            </Text>
          );
        }}
      />
    </View>
  );
};

const App = () => {
  const [pizzaList, setPizzaList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige",
        flex: 1,
      }}
    >
      <View style={{ flexDirection: "row", gap: 20, flex: 1 }}>
        <ScrollViewComponent pizzaList={pizzaList} />
        <FlastListComponent pizzaList={pizzaList} />
        <SectionListDemo />
      </View>
      <AddPizzaButton
        isHovered={isHovered}
        setPizzaList={setPizzaList}
        pizzaList={pizzaList}
        setIsHovered={setIsHovered}
        // alternative masuking props
        // {...{ isHovered, setPizzaList, pizzaList, setIsHovered }}
      />
      {/* <StatusBar style="dark" /> */}
    </SafeAreaView>
  );
};

export default App;
