import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import Item from './Components/ListItem';
import { FruitType, FruitsArray } from './Utils/fruitsData';
import Input from './Components/Input';
import AddFruit from './Components/AddFruit';
import StarredList from './Components/StarredList';

export default function App() {
  const [fruitsState, setFruitsState] = useState<FruitType[]> ([]);
  let [starredFruitState, setStarredFruitState] = useState<FruitType[]>([]);
  const [tab, setTab] = useState<string>("list");
  

  useEffect(
    () => {
      setFruitsState(
        FruitsArray.sort(
          (a: FruitType, b: FruitType) => {
            return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
          }
        )
      );
    }, []
  )

  const handleSearch = (text: string) => {
    const searchResults: FruitType[] = FruitsArray.filter(
      (fruit) => fruit.name.toLowerCase().includes(text)
    );
    setFruitsState(searchResults);
  }

  const starItem = (item: FruitType) => {
    const itemIndex = fruitsState.indexOf(item);
    item.starred = !item.starred;
    if (itemIndex > -1) {
      fruitsState.splice(itemIndex, 1, item);
    }
    setFruitsState([...fruitsState]);
    console.log(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
      <View style={styles.fruitListButton}>
        <TouchableOpacity
          onPress={()=>setTab("list")}
        >
          <Text style={styles.buttonText}>List</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.starredListButton}>
        <TouchableOpacity
        onPress={()=>setTab("starred")}
        >
          <Text style={styles.buttonText}>Starred List</Text>
        </TouchableOpacity>
      </View>
      </View>
      {tab === "list" && 
      <>
      <View style={styles.search}>
        <Input 
          icon="search"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      
      <View style={styles.fruitList}>
      <FlatList
        data={fruitsState}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>starItem(item)}>
        <Item
          id={item.id}
          name={item.name}
          price={item.price}
          starred={item.starred}
        /></TouchableOpacity>)}
      />
      </View>
      <View style={styles.addFruits}>
        <AddFruit
        fruitsState={fruitsState}
        setFruitsState={setFruitsState} 
        />
      </View>
      </>}
      {tab === "starred" && 
      <>
      <StarredList 
      />
      </>}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    margin: 10,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flexShrink: 1,
    paddingBottom: 20,
  },
  fruitList: {
    flexShrink: 1,
    paddingBottom: 20,
  },
  addFruits: {
    flexGrow: 1,
  },
  fruitListButton: {
    backgroundColor: "black",
      padding: 10,
      borderRadius: 6,
      width: "20%",
      margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  starredListButton: {
    backgroundColor: "green",
      padding: 10,
      borderRadius: 6,
      width: "20%",
      margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  }
  

});
