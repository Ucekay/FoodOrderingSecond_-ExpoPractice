import { FlatList } from "react-native";

import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerClassName="gap-2 p-2"
      columnWrapperClassName="gap-2"
    />
  );
}
