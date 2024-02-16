import React from "react";
import {View, Text, FlatList} from "react-native";
import { styles } from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import { products } from "../../../data/products";
import Header from "../../../components/Header";
import FavoriteItem from "../../../components/FavoriteItem";

const Favorites = () => {
    const renderItem = ({item}) => {
        return (
            <FavoriteItem {...item}/>
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Header title="Favorites" />
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)} />
        </View>
        </SafeAreaView>
    )
}
export default Favorites;