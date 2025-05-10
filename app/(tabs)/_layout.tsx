import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const CircleTabIcon = ({ label, focused }: { label: string; focused: boolean }) => (
  <View className="items-center justify-center space-y-1">
    <View
      className={`rounded-full ${
        focused ? "bg-gray-800 w-12 h-12 border-4 border-white" : "bg-gray-400 w-6 h-6"
      }`}
    />
    <Text
      className={`text-xs ${focused ? "text-white font-semibold" : "text-gray-400"}`}
      numberOfLines={1}
    >
      {label}
    </Text>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: 10,
        //   paddingHorizontal: 10,
          backgroundColor: "black",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarIcon: ({ focused }) => {
          let label = "";
          if (route.name === "index") label = "Home";
          else if (route.name === "statistik") label = "Statistik";
          else if (route.name === "profile") label = "Profile";
          return <CircleTabIcon label={label} focused={focused} />;
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="statistik" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
