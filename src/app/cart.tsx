import { Platform, View, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerClassName="p-2 gap-2"
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
