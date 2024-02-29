import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";

import { useCart } from "@/src/providers/CartProvider";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { PizzaSize } from "@/src/types";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen options={{ title: product.name }} />
      <Image
        src={product.image || defaultPizzaImage}
        className="aspect-square w-full"
      />
      <Text className="my-2 text-xl font-semibold">{product.name}</Text>
      <Text className="text-lg font-bold">Price: ${product.price}</Text>
    </View>
  );
}

export default ProductDetailScreen;
