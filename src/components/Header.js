
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={style.container}>
            <Text style={style.lightHeader}>Grab your</Text>
            <Text style={style.boldHeader}>Delicous mael!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop:60,
        marginHorizontal:25,
    },
    lightHeader: {
        fontSize: 35,
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: "bold",
    }
});
