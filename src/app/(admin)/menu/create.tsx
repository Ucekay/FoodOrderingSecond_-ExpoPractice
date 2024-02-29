import { View, Text, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };
  const validateInput = () => {
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price must be a number");
      return false;
    }
    setErrors("");
    return true;
  };
  const onSubmit = () => {
    if (isUpdating) {
      // update
      onUpdate();
    } else {
      onCreate();
    }
  };
  const onCreate = () => {
    if (!validateInput()) return;
    // create product
    resetFields();
  };
  const onUpdate = () => {
    if (!validateInput()) return;
    // update product
    resetFields();
  };
  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product?", [
      {
        text: "Cancel",
      },
      { text: "Delete", style: "destructive", onPress: onDelete },
    ]);
  };
  const onDelete = () => {
    console.warn("delete");
  };
  return (
    <View className="flex-1 justify-center p-2">
      <Stack.Screen
        options={{ title: isUpdating ? "Update Product" : "Create Product" }}
      />
      <Image
        source={{ uri: defaultPizzaImage }}
        className="aspect-square w-[50%] self-center"
      />
      <Text
        onPress={pickImage}
        className="my-2 self-center font-bold text-lightTint"
      >
        select image
      </Text>
      <Text className="text-base text-gray-500">create</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="mb-5 mt-1 rounded-md bg-white p-2"
      />
      <Text className="text-base text-gray-500">price ($)</Text>
      <TextInput
        placeholder="9.99"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        className="mb-5 mt-1 rounded-md bg-white p-2"
      />
      <Text className="text-red-600">{errors}</Text>
      <Button onPress={onSubmit} text={isUpdating ? "Update" : "Create"} />
      {isUpdating && (
        <Text
          onPress={confirmDelete}
          className="my-2 self-center font-bold text-lightTint"
        >
          Delete
        </Text>
      )}
    </View>
  );
};

export default CreateProductScreen;
