import { config } from "@tamagui/config/v3";
import { View } from "react-native";
import { createTamagui, TamaguiProvider, Button } from "tamagui";

const tamaguiConfig = createTamagui(config);

const App = () => {
  console.log("tamaguiConfig", tamaguiConfig);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Button theme="red">Hello world</Button>
    </TamaguiProvider>
  );
};

export default App;
