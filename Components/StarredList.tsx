import React, { FC, } from "react";
import { View, Text, StyleSheet } from 'react-native';

const StarredList: FC = () => {
    return (
        <View>
            <Text>Starred List</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    starredList: {
        flex: 1,
        width: "100%",
    }
})

export default StarredList;