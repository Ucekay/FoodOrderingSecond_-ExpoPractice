import { Stack } from "expo-router";
import "@/src/global.css";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
    </Stack>
  );
}
