import { Stack } from "expo-router";
import "@/src/global.css";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  );
}
