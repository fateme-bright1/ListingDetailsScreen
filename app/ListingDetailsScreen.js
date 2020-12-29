import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText  from "../app/AppText";
import colors   from "../app/colors";
import ListItem from "../app/ListItem";

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("./assets/loptop.png")} />
            <View style={styles.detailContainer}>
            <AppText style={styles.title}> LopTop For Sale!</AppText>
            <AppText style={styles.price}>5000$</AppText>
            <View style={styles.userContainer}>
            <ListItem
            image={require("./assets/bg-7.png")}
            title="PARTO"
            subTitle="5 Listings"
            />
            </View>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 50,
    },
});
export default ListingDetailsScreen;