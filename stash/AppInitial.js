import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createTamagui, TamaguiProvider, XStack, Text } from "tamagui";

const tamaguiConfig = createTamagui(config);

const App = () => {
  // @ts-ignore
  const [loaded] = useFonts({
    // @ts-ignore
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // @ts-ignore
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <View
          style={{
            paddingHorizontal: 20,
            flex: 1,
            backgroundColor: "lightgray",
          }}
        >
          <XStack
            justifyContent="space-between"
            backgroundColor={"aquamarine"}
            alignItems="center"
          >
            {/** ini untuk Instagram Title dan Dropdown */}
            <XStack alignItems="center">
              <Text fontSize={30}>Instagram</Text>
              <MaterialCommunityIcons name="chevron-down" size={25} />
            </XStack>

            {/** Lope lope dan Messenger/DM */}
            <XStack>
              <MaterialCommunityIcons name="heart-outline" size={25} />
              <MaterialCommunityIcons name="facebook-messenger" size={25} />
            </XStack>
          </XStack>
        </View>
      </TamaguiProvider>
    </SafeAreaView>
  );
};

export default App;
