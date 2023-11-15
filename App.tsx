import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import { StyleSheet, View } from "react-native";
import Welcome from "./components/WelcomeScreen";

export default function App() {
    return (
        <>
            <Header></Header>
            <View style={style.container}>
                <Welcome></Welcome>
                <MenuItems></MenuItems>
            </View>
            <Footer></Footer>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flex: 1,
    },
});
