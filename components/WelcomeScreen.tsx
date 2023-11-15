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
            <Text style={style.menuItemName}>{item.name}</Text>
            <Text style={style.menuItemPrice}>{item.price}</Text>
        </View>
    );
};

type Item = (typeof items)[number];

const items = [
    { name: "Hummus", price: "$5.00", id: "1A" },
    { name: "Moutabal", price: "$5.00", id: "2B" },
    { name: "Falafel", price: "$7.50", id: "3C" },
    { name: "Marinated Olives", price: "$5.00", id: "4D" },
    { name: "Kofta", price: "$5.00", id: "5E" },
    { name: "Eggplant Salad", price: "$8.50", id: "6F" },
    { name: "Lentil Burger", price: "$10.00", id: "7G" },
    { name: "Smoked Salmon", price: "$14.00", id: "8H" },
    { name: "Kofta Burger", price: "$11.00", id: "9I" },
    { name: "Turkish Kebab", price: "$15.50", id: "10J" },
    { name: "Fries", price: "$3.00", id: "11K" },
    { name: "Buttered Rice", price: "$3.00", id: "12L" },
    { name: "Bread Sticks", price: "$3.00", id: "13M" },
    { name: "Pita Pocket", price: "$3.00", id: "14N" },
    { name: "Lentil Soup", price: "$3.75", id: "15O" },
    { name: "Greek Salad", price: "$6.00", id: "16Q" },
    { name: "Rice Pilaf", price: "$4.00", id: "17R" },
    { name: "Baklava", price: "$3.00", id: "18S" },
    { name: "Tartufo", price: "$3.00", id: "19T" },
    { name: "Tiramisu", price: "$5.00", id: "20U" },
    { name: "Panna Cotta", price: "$5.00", id: "21V" },
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
        padding: 10,
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
        paddingBottom: 20,
    },
    menuScroll: {
        paddingHorizontal: 10,
    },
    menuItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menuItemName: {
        color: "white",
        fontSize: 20,
        letterSpacing: 3,
        padding: 5,
    },
    menuItemPrice: {
        color: "white",
        fontSize: 20,
        letterSpacing: 3,
    },
});
