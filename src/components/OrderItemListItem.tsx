import { View, Text, Image } from "react-native";
import React from "react";
import { OrderItem } from "@/src/types";
import { defaultPizzaImage } from "@/src/components/ProductListItem";

type OrderItemListItemType = {
  orderItem: OrderItem;
};

const OrderItemListItem = ({ orderItem }: OrderItemListItemType) => {
  const product = orderItem.products;
  return (
    <View className="flex-row items-center justify-between gap-2 rounded-xl bg-white p-2">
      <Image
        src={product.image || defaultPizzaImage}
        className="aspect-square w-20"
      />
      <View className="flex-1">
        <Text className="text-xl font-bold">{product.name}</Text>
        <View className="flex-row items-center gap-2">
          <Text className="text-lg font-semibold text-lightTint">
            ${product.price * orderItem.quantity}
          </Text>
          <Text className="text-lg font-semibold">Size: {orderItem.size}</Text>
        </View>
      </View>
      <Text className="p-2 text-2xl font-semibold">{orderItem.quantity}</Text>
    </View>
  );
};

export default OrderItemListItem;
