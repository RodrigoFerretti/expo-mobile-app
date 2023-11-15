import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={style.footerView}>
            <View style={style.footerStripe}>
                <Text style={style.footerText}>All rights reserved by Little Lemon, 2022 </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    footerView: {
        backgroundColor: "#495E57",
    },
    footerStripe: {
        backgroundColor: "#F4CE14",
        marginBottom: 10,
    },
    footerText: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
    },
});
