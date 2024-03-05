import { View, Text, FlatList } from "react-native";
import React from "react";
import orders from "@/assets/data/orders";
import OrdersListItem from "@/src/components/OrdersListItem";

const OrdersScreen = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersListItem order={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2 p-2"
      />
    </View>
  );
};

export default OrdersScreen;
