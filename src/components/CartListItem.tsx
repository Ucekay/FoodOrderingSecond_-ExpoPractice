import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { CartItem } from "../types";
import { Link } from "expo-router";
import { defaultPizzaImage } from "./ProductListItem";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "../providers/CartProvider";

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateQuantity } = useCart();
  return (
    <View className="flex-1 flex-row items-center rounded-xl bg-white p-1">
      <Image
        source={{ uri: cartItem.product.image || defaultPizzaImage }}
        className="mr-2 aspect-square w-20 self-center"
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="mb-1 text-lg font-medium">
          {cartItem.product.name}
        </Text>
        <View className="flex-row gap-1">
          <Text className="text-base font-bold text-lightTint">
            ${cartItem.product.price.toFixed(2)}
          </Text>
          <Text className="text-base">Size: {cartItem.size}</Text>
        </View>
      </View>
      <View className="my-2 flex-row items-center gap-3">
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />

        <Text className="text-xl font-medium">{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default CartListItem;
