import { Platform, Text, View, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View className="p-2">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerClassName="gap-2"
      />
      <Text className="mt-5 text-xl font-medium">total: ${total} </Text>
      <Button text="Checkout"></Button>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
