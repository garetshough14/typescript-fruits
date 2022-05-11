import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FruitType } from "../Utils/fruitsData";
import Input from "./Input";

interface Props {
    fruitsState: FruitType[];
    setFruitsState: (array: FruitType[]) => void;
  }
  
  const AddFruit:FC<Props> = ({fruitsState, setFruitsState}:Props) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [fruitName, setFruitName] = useState<string>("");
    const [fruitPrice, setFruitPrice] = useState<number>(0);
    
    const handleAdd = () => {
      setFruitsState([...fruitsState, {
          id: Date.now(),
          name: fruitName,
          price: fruitPrice,
          starred: false,
      }]);
      setShowForm(false);
    }

  
    return (
      <View style={styles.addFruitForm}>
        {showForm && 
          <View style={styles.addInputs}>
            <Input
              icon="edit"
              placeholder='Fruit Name'
              onChangeText={(name) => setFruitName(name)}
            />
            <Input
              icon="dollar"
              placeholder='Fruit Price'
              onChangeText={(price) => setFruitPrice(+price)}
            />
          </View>
        }
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => showForm === false ? setShowForm(true) : handleAdd()}
        >
          <Text style={styles.addButtonText}>Add Fruit</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
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
      fontWeight: "bold"
    },
    addInputs: {
      flexDirection: "row",
    }
  });
  
  export default AddFruit;