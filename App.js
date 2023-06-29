import { StatusBar } from "expo-status-bar";
import { Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center dark:bg-slate-800">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <Text className="text-[40px] font-bold dark:text-white">
        React Expo TailWindCSS
      </Text>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}
