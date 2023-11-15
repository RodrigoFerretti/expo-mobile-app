import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

export default function WelcomeScreen() {
    const renderItem = ({ item }: { item: Item }) => <Item item={item} />;
    const keyExtractor = (item: Item) => item.id;

    return (
        <>
            <Header></Header>
            <View style={style.pageView}>
                <View style={style.welcomeView}>
                    <Text style={style.textTitle}>Welcome</Text>
                    <Text style={style.descriptionText}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in
                        a lively but casual environment. We would love to hear more about your experience with us!
                    </Text>
                </View>

                <View style={style.menuView}>
                    <Text style={style.textTitle}>Menu</Text>
                    <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        indicatorStyle="white"
                        style={style.menuScroll}
                    ></FlatList>
                </View>
            </View>
            <Footer></Footer>
        </>
    );
}

const Item = ({ item }: { item: Item }) => {
    return (
        <View style={style.menuItemView}>
            <Text style={style.menuItemText}>{item.name}</Text>
        </View>
    );
};

type Item = (typeof items)[number];

const items = [
    { name: "Hummus", id: "1A" },
    { name: "Moutabal", id: "2B" },
    { name: "Falafel", id: "3C" },
    { name: "Marinated Olives", id: "4D" },
    { name: "Kofta", id: "5E" },
    { name: "Eggplant Salad", id: "6F" },
    { name: "Lentil Burger", id: "7G" },
    { name: "Smoked Salmon", id: "8H" },
    { name: "Kofta Burger", id: "9I" },
    { name: "Turkish Kebab", id: "10J" },
    { name: "Fries", id: "11K" },
    { name: "Buttered Rice", id: "12L" },
    { name: "Bread Sticks", id: "13M" },
    { name: "Pita Pocket", id: "14N" },
    { name: "Lentil Soup", id: "15O" },
    { name: "Greek Salad", id: "16Q" },
    { name: "Rice Pilaf", id: "17R" },
    { name: "Baklava", id: "18S" },
    { name: "Tartufo", id: "19T" },
    { name: "Tartufo", id: "20U" },
    { name: "Tiramisu", id: "21V" },
    { name: "Panna Cotta", id: "22W" },
];

const style = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: "#333333",
    },
    welcomeView: {
        alignItems: "center",
        flex: 1,
    },
    textTitle: {
        textAlign: "center",
        fontSize: 25,
        padding: 15,
        color: "white",
        fontWeight: "bold",
    },
    descriptionText: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        maxWidth: 300,
    },
    menuView: {
        flex: 2.2,
        alignItems: "center",
        paddingBottom: 20,
    },
    menuScroll: {
        paddingHorizontal: 100,
    },
    menuItemView: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    menuItemText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        letterSpacing: 3,
    },
});
