import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

const ProductsItems = ({product}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: product.image}} style={{width: 200, height: 200}} />
            <Text style={styles.textTitle}>{product.name}</Text>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.textPrice}>${product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
    textPrice: {
        fontSize: 20,
        color: 'green',
    }
});

export default ProductsItems;