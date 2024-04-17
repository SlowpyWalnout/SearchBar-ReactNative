import React, {useState} from 'react';
import {FlatList} from "react-native";
import ProductsItems from "./ProductsItems";


const ProductsList = ({products}) => {
    return(
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ProductsItems product={item} />}
        />
    )
}
export default ProductsList;