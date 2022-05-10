import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const StarredList: FC = () => {
  return (
    <View style={styles.starredList}>
      <Text>Starred Fruits List</Text>
      <Text>Total: </Text>
      <Text>[Fruit 1]</Text>
    </View>
  );
};

export default StarredList;

const styles = StyleSheet.create({
  starredList: {
    flex: 1,
    width: "100%",
  },
});
