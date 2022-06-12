import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView } from 'react-native';
import { useRef } from 'react';

const { width, height } = Dimensions.get("window");

const Slider = () => {
    return (
        <View style={[style.view, { width, height }]}>
            <View style={[style.containerViewTop, {width}]}>
                <View style={style.viewTop}>
                    <View style={style.viewTopLeft}>
                        <Image style={style.img} source={require('../../images/coins.png')} />
                        <Text>25 coins</Text>
                    </View>
                    <View style={style.viewTopRigth}>
                        <Text>25 km</Text>
                        <Image style={style.imgUser} source={require('../../images/user.png')} />
                    </View>
                </View>
                <View style={style.viewCardUp}>
                    <View style={style.viewCardUpLeft}>
                        <Text>Temps total</Text>
                        <Text>89.3 MIN</Text>
                    </View>
                    <View style={style.viewCardUpRigth}>
                        <Text>Distance total</Text>
                        <Text>10.3 KM</Text>
                    </View>
                </View>
                <View style={style.viewCardDown}>
                    <View style={style.viewCardDownLeft}>
                        <Text>Item le plus utiliser</Text>
                        <Text>X-Runner High</Text>
                        <Text>Black and red</Text>
                    </View>
                </View>
                <View style={style.viewTopButton}>

                </View>
            </View>
            <Text>ezfzef</Text>
        </View>
    )
}


const style = StyleSheet.create({
    view: {
        alignItems: "center",
    },
    containerViewTop: {
        borderWidth: 1,
        height: height/2,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        paddingTop: 60,
        paddingHorizontal: 20
    },
    viewTop: {
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
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
        height: 20
    },
    imgUser: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 100,
    },
    viewCardUp: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 20
    },
    viewCardUpLeft: {
        borderRadius: 30,
        width: 165,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CFE2DF"
    },
    viewCardUpRigth: {
        borderRadius: 30,
        width: 165,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CFE2DF"
    },
    viewCardDown: {
        alignItems: "center"
    },
    viewCardDownLeft: {
        borderRadius: 30,
        width: 290,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CFE2DF"
    }
})

export default Slider;