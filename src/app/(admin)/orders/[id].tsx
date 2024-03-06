import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import orders from "@/assets/data/orders";
import OrdersListItem from "@/src/components/OrdersListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import Colors from "@/src/constants/Colors";
import { OrderStatusList } from "@/src/types";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() === id);
  if (!order) {
    return <Text>Order not found</Text>;
  }
  return (
    <View className="p-2">
      <Stack.Screen options={{ title: `Order ${order.id}` }} />

      <FlatList
        data={order.order_items}
        ListHeaderComponent={() => <OrdersListItem order={order} />}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        ListFooterComponent={() => (
          <>
            <Text style={{ fontWeight: "bold" }}>Status</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn("Update status")}
                  style={{
                    borderColor: Colors.light.tint,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor:
                      order.status === status
                        ? Colors.light.tint
                        : "transparent",
                  }}
                >
                  <Text
                    style={{
                      color:
                        order.status === status ? "white" : Colors.light.tint,
                    }}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2 py-2"
      />
    </View>
  );
};
export default OrderDetailScreen;
