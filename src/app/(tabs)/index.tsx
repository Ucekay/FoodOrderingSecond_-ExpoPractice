import { View } from "react-native";

import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

const product = products[0];

export default function TabOneScreen() {
  return (
    <View className="flex-1">
      <ProductListItem product={product} />
    </View>
  );
}
