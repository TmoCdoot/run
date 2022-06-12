import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView } from 'react-native';
import { useRef } from 'react';

import Home from '../home';
import Inventory from '../inventory';
import Shop from '../shop';


const { width, height } = Dimensions.get("window");
const Slider = () => {
    const ref = useRef();
    const [index, setIndex] = useState(0);

    return (
        <View>
            <View style={[style.container, {width}]}>
                <Image style={style.img} source={require('../../images/run.png')} />
                <Image style={style.img} source={require('../../images/inventory.png')} />
                <Image style={style.img} source={require('../../images/bag.png')} />
            </View>
            
            <Animated.ScrollView
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            ref={ref}
            pagingEnabled
            initialScrollIndex={index}
            Ind
            >
                <Home label="home" />
                <Inventory label="inventory" />
                <Shop label="shop"/>
            </Animated.ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        position: "absolute",
        bottom: 0,
        height: 85,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#F0FBF9",
        flex: 1,
        justifyContent: "space-around",
        paddingTop: 25,
        //alignItems: "center",
        flexDirection: "row"
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },  
    img: {
        width: 25,
        height: 25,
    }
})

export default Slider;