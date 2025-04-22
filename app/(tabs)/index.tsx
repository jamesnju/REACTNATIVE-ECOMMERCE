import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "@/types/type";

type Props = {};

const HomeScreen = (props: Props) => {
const [products, setProducts] = useState<ProductType>([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const URL = `http://localhost:8000/products`;
    const response = await axios.get(URL);
    console.log(response.data);
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
