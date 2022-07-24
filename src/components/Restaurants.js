
import { StyleSheet, Text, View } from "react-native";
import useRestaurants from "../hooks/useRestaurants"
import { useEffect } from "react";


export default function Restaurants(term) {
    
    const [{data, loading, error}, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [])

    return (
        <View style={style.container}>
            <Text style={style.header}>Top Restaurants</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginLeft: 25,
        marginVertical: 15,
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        height: 100,
    }
})


