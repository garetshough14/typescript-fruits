import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FruitType } from "../Utils/fruitsData";
import { FontAwesome } from '@expo/vector-icons';


const Item:FC<FruitType> = (props) => {



  return(
    <View style={styles.container}>
      <View style={styles.itemStar}>
          <FontAwesome 
            name={props.starred ? "star" : "star-o"} 
            size={22} 
            color={props.starred ?"green" : "#555" }
          />
       
        <Text style={styles.item}>{props.name}</Text>
      </View>
      
      <View style={styles.itemPrice}>
        <Text style={styles.item}>{props.price}</Text>
      </View>
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
  },
  item: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 16,
  }, 
  itemPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemStar: {
    flexDirection: "row",
  }
})