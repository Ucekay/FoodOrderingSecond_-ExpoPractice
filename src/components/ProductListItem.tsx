import { Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

import { Product } from "../types";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable className="max-w-[50%] flex-1 rounded-3xl bg-white p-2">
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          className="aspect-square w-full"
          resizeMode="contain"
        />
        <Text className="my-2 text-lg font-semibold">{product.name}</Text>
        <Text className="font-bold text-lightTint">${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
