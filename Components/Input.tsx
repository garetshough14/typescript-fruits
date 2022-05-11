import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
  }
  
  const Input: FC<Props> = (props) => {
    return (
      <View style={styles.container}>
      <FontAwesome 
        name={props.icon} 
        size={22} 
        color="#555" 
      />
        <TextInput 
          placeholderTextColor="#555"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          style={styles.input}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      height: 22,
      flexShrink: 1,
    },
    input: {
      height: 22,
      fontSize: 16,
      marginLeft: 5,
      paddingLeft: 5,
      width: "90%"
    }
  })
  
  export default Input;