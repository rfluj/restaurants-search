
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { elevation } from "../common/styles";


export default function CategoryItem({ name, imageUrl, index, active, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
          <View style={[
            style.container,
            style.elevation,
            index === 0 ? {marginLeft: 25} : {marginLeft: 15},
            active ? {backgroundColor: "rgb(241, 186, 87)"} : {backgroundColor: "#fff"}
            ]}
          >
            <View style={style.imageContainer}>
              <Image
                source={imageUrl}
                style={style.image}
              />
            </View>
            <Text style={style.header}>{name}</Text>
          </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        // marginHorizontal: 25,
        // backgroundColor: "rgb(241, 186, 87)",
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    elevation,
    image: {
        width: 35,
        height: 35,
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginBottom: 5,
    },
    header: {
        fontWeight: "bold",
    }
});

