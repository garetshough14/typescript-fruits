import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FruitType } from "../Utils/fruitsData";
import Input from "./Input";

interface Props {
  fruitsState: FruitType[];
  setFruitsState: (array: FruitType[]) => void;
}

const AddFruit: FC<Props> = ({ fruitsState, setFruitsState }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [newFruit, setNewFruit] = useState<FruitType | null>(null);

  const handleAdd = () => {
    if (newFruit !== null && fruitsState !== null) {
      setFruitsState([...fruitsState, newFruit]);
    } else if (newFruit !== null && fruitsState === null) {
      setFruitsState([newFruit]);
    }
    setNewFruit(null);
    setShowForm(false);
  };

  return (
    <View style={styles.addFruitForm}>
      {showForm && (
        <View style={styles.addInputs}>
          <Input
            icon="edit"
            placeholder="Fruit Name"
            onChangeText={(text) => {
              if (newFruit !== null) {
                setNewFruit({ ...newFruit, name: text });
              } else {
                setNewFruit({ id: Date.now(), name: text, price: 0 });
              }
            }}
          />
          <Input
            icon="dollar"
            placeholder="Fruit Price"
            onChangeText={(text) => {
              if (newFruit !== null) {
                setNewFruit({ ...newFruit, price: +text });
              } else {
                setNewFruit({ id: Date.now(), name: "", price: +text });
              }
            }}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => (showForm === false ? setShowForm(true) : handleAdd())}
      >
        <Text style={styles.addButtonText}>Add Fruit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFruit;

const styles = StyleSheet.create({
  addFruitForm: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  addButton: {
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 6,
    marginVertical: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  addInputs: {
    flexDirection: "row",
  },
});
