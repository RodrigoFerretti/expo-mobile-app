import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

export default function WelcomeScreen() {
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
                    <ScrollView indicatorStyle="white" style={style.menuScroll}>
                        <Text style={style.menuItems}>{items}</Text>
                    </ScrollView>
                </View>
            </View>
            <Footer></Footer>
        </>
    );
}

const items =
    " Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta";

const style = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: "#495E57",
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
        flex: 2,
        alignItems: "center",
    },
    menuScroll: {},
    menuItems: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
    },
});
