import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Welcome() {
    return (
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Text style={style.titleText}>Welcome</Text>
                <Text style={style.descriptionText}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a
                    lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        alignItems: "center",
        flex: 1,
    },
    titleText: {
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
});
