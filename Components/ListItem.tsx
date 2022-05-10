import React, { FC, useState } from "react";
import { FruitType, starredFruitsArray } from "../Utils/fruitsData";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Item: FC<FruitType> = (props) => {
  const [newStarredFruit, setNewStarredFruit] = useState<FruitType | null>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('pressed star')}>
        <FontAwesome name='star' size={22} color="#555" />
      </TouchableOpacity>
      <Text style={[styles.item, { flexGrow: 1 }]}>{props.name}</Text>
      <Text style={styles.item}>{props.price}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
    padding: 10,
  },
  item: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
});
