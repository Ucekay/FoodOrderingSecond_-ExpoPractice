import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import { Link, Stack } from "expo-router";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center p-2">
      <Stack.Screen options={{ title: "Sign up" }} />
      <Text className="text-base text-gray-500">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        className="mb-5 mt-1 rounded-md bg-white p-2"
      />
      <Text className="text-base text-gray-500">Password</Text>
      <TextInput
        secureTextEntry={true}
        autoComplete="current-password"
        value={password}
        onChangeText={setPassword}
        className="mb-5 mt-1 rounded-md bg-white p-2"
      />
      <Button text="Create account" onPress={() => console.log("sign in")} />
      <Link href="/(auth)/sign-in" asChild>
        <Text className="my-2 self-center pt-4 font-bold text-lightTint">
          Sign in
        </Text>
      </Link>
    </View>
  );
};

export default SignUpScreen;
