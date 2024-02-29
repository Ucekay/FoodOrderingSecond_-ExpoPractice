import { View, Text, Image } from "react-native";
import React from "react";

import { Product } from "../types";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View className="flex rounded-3xl bg-white">
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className="aspect-square w-full"
      />
      <Text className="my-2 text-lg font-semibold">{product.name}</Text>
      <Text className="font-bold text-lightTint">{product.price}</Text>
    </View>
  );
};

export default ProductListItem;
