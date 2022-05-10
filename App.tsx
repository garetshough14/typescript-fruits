import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FruitType, FruitArray, starredFruitsArray } from "./Utils/fruitsData";
import Input from "./Components/Input";
import AddFruit from "./Components/AddFruit";
import Item from "./Components/ListItem";
import StarredList from "./Components/StarredList";

export default function App() {
  const [tab, setTab] = useState<string>("list");
  const [fruitsState, setFruitsState] = useState<FruitType[]>([]);
  const [starredFruitsState, setStarredFruitsState] = useState<FruitType[]>([]);

  useEffect(() => {
    setFruitsState(
      FruitArray.sort((a: FruitType, b: FruitType) => {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      })
    );
  }, []);

  const handleSearch = (text: string) => {
    const searchResults: FruitType[] = FruitArray.filter((fruit) =>
      fruit.name.toLowerCase().includes(text.toLocaleLowerCase())
    );
    setFruitsState(searchResults);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setTab("list")}>
          <Text>List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab("starred")}>
          <Text>Starred</Text>
        </TouchableOpacity>
      </View>
      {tab === "list" && (
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
              renderItem={({ item }) => (
                <Item id={item.id} name={item.name} price={item.price} />
              )}
            />
          </View>
          <View style={styles.addFruits}>
            <AddFruit
              fruitsState={fruitsState}
              setFruitsState={setFruitsState}
            />
          </View>
        </>
      )}
      {tab === "starred" && (
        <>
          <StarredList 
          starredFruitsState={starredFruitsState}
          setStarredFruitsState={setStarredFruitsState}
          />
        </>
      )}
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
    paddingBottom: 10,
  },
  addFruits: {
    flexGrow: 1,
  },
});