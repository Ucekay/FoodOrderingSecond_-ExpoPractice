import React from "react";
import { View, Text, FlatList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import orders from "@/assets/data/orders";
import OrdersListItem from "@/src/components/OrdersListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() === id);
  if (!order) {
    return <Text>Order not found</Text>;
  }
  return (
    <View className="p-2">
      <Stack.Screen options={{ title: `Order ${order.id}` }} />

      <OrdersListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2 py-2"
      />
    </View>
  );
};
export default OrderDetailScreen;
