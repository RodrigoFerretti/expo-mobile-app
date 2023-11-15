import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={style.headerView}>
            <Text style={style.headerText}>Little Lemon</Text>
        </View>
    );
}

const style = StyleSheet.create({
    headerView: {
        justifyContent: "flex-end",
        flex: 0.12,
        backgroundColor: "#EE9972",
    },
    headerText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
    },
});
