import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView } from 'react-native';

import Home from '../home';
import Inventory from '../inventory';
import Shop from '../shop';


const { width, height } = Dimensions.get("window");

const App = () => {

    return (
        <View>

            <Animated.ScrollView
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            pagingEnabled
            Ind
            >
                <Home label="home" />
                <Inventory label="inventory" />
                <Shop label="shop"/>
            </Animated.ScrollView>

            <View style={[style.viewTop, { width }]}>
                <View style={style.viewTopLeft}>
                    <Image style={style.img} source={require('../../images/coins.png')} />
                    <Text>25 coins</Text>
                </View>
                <View style={style.viewTopRigth}>
                    <Text>25 km</Text>
                    <Image style={style.imgUser} source={require('../../images/user.png')} />
                </View>
            </View>

            <View style={[style.container, {width}]}>
                <Image style={style.img} source={require('../../images/run.png')} />
                <Image style={style.img} source={require('../../images/inventory.png')} />
                <Image style={style.img} source={require('../../images/bag.png')} />
            </View>
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
    },
    viewTop: {
        position: "absolute",
        marginTop: 50,
        //borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        paddingHorizontal: 30
    },
    viewTopLeft: {
        flexDirection: "row",
    },
    viewTopRigth: {
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    imgUser: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 100,
        marginLeft: 5,
        backgroundColor: "#FFFFFF"
    },
})

export default App;