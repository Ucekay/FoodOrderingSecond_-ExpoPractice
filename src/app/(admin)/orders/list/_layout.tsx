import { Tabs, withLayoutContext } from "expo-router";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrderListNavigator() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <TopTabs
        screenOptions={{
          tabBarItemStyle: { width: Dimensions.get("window").width / 2 },
        }}
      >
        <TopTabs.Screen name="index" options={{ tabBarLabel: "Active" }} />
        <TopTabs.Screen name="archive" options={{ tabBarLabel: "Archive" }} />
      </TopTabs>
    </SafeAreaView>
  );
}
