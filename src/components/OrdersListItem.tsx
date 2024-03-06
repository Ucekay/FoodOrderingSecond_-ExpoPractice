import { View, Text, Pressable } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Order } from "@/src/types";
import { Link, useSegments } from "expo-router";

dayjs.extend(relativeTime);

type OrderListItemType = {
  order: Order;
};

const OrdersListItem = ({ order }: OrderListItemType) => {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable className="w-full flex-initial flex-row items-center justify-between rounded-xl bg-white">
        <View className="px-2 py-3">
          <Text className="text-lg font-bold">Order {order.id}</Text>
          <Text className="text-base text-gray-500">
            {dayjs().to(dayjs(order.created_at))}
          </Text>
        </View>
        <Text className="p-2 text-lg font-bold">{order.status}</Text>
      </Pressable>
    </Link>
  );
};

export default OrdersListItem;
