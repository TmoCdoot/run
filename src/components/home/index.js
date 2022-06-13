import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView, Pressable } from 'react-native';
import { useRef } from 'react';

const { width, height } = Dimensions.get("window");

const App = () => {
    return (
        <View style={[style.view, { width, height }]}>
            
            <View style={[style.containerViewTop, {width}]}>

                <View style={style.viewCardUp}>
                    <View style={[style.viewCardUpLeft, style.center]}>
                        <Text style={[style.cardUpText, style.blue]}>Temps total</Text>
                        <Text style={style.cardData}>89.3 MIN</Text>
                    </View>
                    <View style={[style.viewCardUpRigth, style.center]}>
                        <Text style={[style.cardUpText, style.green]}>Distance total</Text>
                        <Text style={style.cardData}>10.3 KM</Text>
                    </View>
                </View>

                <View style={style.viewCardDown}>
                    <View style={[style.viewCardDownLeft, style.center]}>
                        <Text style={[style.cardUpText, style.red]}>Item le plus utiliser</Text>
                        <Text style={style.cardData}>X-Runner High</Text>
                        <Text style={style.cardData2}>Black and red</Text>
                    </View>
                </View>

                <View style={style.viewTopButton}>
                    <Pressable style={style.button} /* onPress={() => navigation.navigate('Slider')} */>
                        <Text style={style.buttonText}>START</Text>
                    </Pressable>   
                </View>

            </View>

            <View style={[style.viewDown, { width }]}>

                <View style={style.viewDownCard}>
                    <Text>Temps moyen</Text>
                    <Text>29.5 min</Text>
                </View>

                <View style={style.viewDownCard}>
                    <Text>Distance moyenne</Text>
                    <Text>4.8 km</Text>
                </View>

                <View style={style.viewDownCard}>
                    <Text>Vitesse moyen</Text>
                    <Text>13.5 km/h</Text>
                </View>

                <View style={style.viewDownLargCard}>
                    <Text style={style.xpTitle}>Experience</Text>
                    <View style={style.xpBar}></View>
                    <View style={style.xpBarLv}>
                        <Text>Lv 7</Text>
                        <Text>Lv 8</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    view: {
        alignItems: "center",
    },
    containerViewTop: {
        borderWidth: 1,
        height: 500,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#F0FBF9"
    },
    viewTop: {
        //borderWidth: 1,
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
        height: 20,
        marginRight: 5
    },
    imgUser: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 100,
        marginLeft: 5
    },
    viewCardUp: {
        //borderWidth: 1,
        marginTop:50,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 20
    },
    viewCardUpLeft: {
        borderRadius: 30,
        width: 165,
        height: 130,
        alignItems: "center",
        backgroundColor: "#CFE2DF"
    },
    viewCardUpRigth: {
        borderRadius: 30,
        width: 165,
        height: 130,
        alignItems: "center",
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
        backgroundColor: "#CFE2DF"
    },
    viewTopButton: {
        alignItems: "center"
    },
    button: {
        backgroundColor: "#00CA85",
        width: 200,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 17,
        fontSize: 20
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "Epilogue",
        fontWeight: "700",
        fontStyle: "normal"
    },
    cardUpText: {
        marginTop: 22,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "700"
    },
    red: {
        color: "#CA1800"
    },
    green: {
        color: "#00CA85"
    },
    blue: {
        color: '#002CCA'
    },
    cardData: {
        fontWeight: "700",
        fontSize: 24
    },
    center: {
        alignContent: "space-around"
    },
    cardData2: {
        fontSize: 14,
        fontWeight: "700",
        color: "#555555"
    },
    viewDown: {
        //borderWidth: 1,
        alignItems: "center",
        marginTop: 5
    },
    viewDownCard: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 314,
        height: 30,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 50,
        marginVertical: 10,
        backgroundColor: "#F0FBF9",
    },
    viewDownLargCard: {
        borderWidth: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        width: 314,
        height: 80,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: "#F0FBF9",

    },
    xpTitle: {
        textAlign: "left",
        width: 270
    },
    xpBar: {
        backgroundColor: "#00CA85",
        height: 10,
        width: 270,
        borderRadius: 50,
    },
    xpBarLv: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 270
    }
})

export default App;