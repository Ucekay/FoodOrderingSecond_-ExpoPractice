import Colors from "@/src/constants/Colors";
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ title: "Sign in" }} />
    </Stack>
  );
}
