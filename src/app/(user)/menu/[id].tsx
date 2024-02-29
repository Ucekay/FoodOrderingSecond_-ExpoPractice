import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View className="flex-1 bg-white p-2">
      <Stack.Screen options={{ title: product.name }} />
      <Image
        src={product.image || defaultPizzaImage}
        className="aspect-square w-full"
      />
      <Text>Select size</Text>
      <View className="my-2 flex-row justify-around">
        {sizes.map((size) => {
          return (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              className={`size-12 items-center justify-center rounded-full ${
                size === selectedSize ? "bg-sky-300" : "bg-slate-200"
              }`}
            >
              <Text
                className={`text-xl font-medium ${
                  size === selectedSize ? "text-black" : "text-slate-500"
                }`}
              >
                {size}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Text className="mt-auto text-lg font-bold">Price: ${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
}

export default ProductDetailScreen;
