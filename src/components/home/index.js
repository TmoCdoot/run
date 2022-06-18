import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView, Pressable, Modal } from 'react-native';
import { useRef } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const { width, height } = Dimensions.get("window");

const App = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[style.view, { width, height }]}>

            <View style={[style.containerViewTop, { width }]}>

                <View style={style.viewCardDown}>
                    <View style={[style.viewCardDownLeft, style.shadow]}>
                        <View style={[{ alignItems: "center" }]}>
                            <Text style={[style.cardDownText]}>Item le plus utiliser</Text>
                            <Text style={style.cardData}>X-Runner High</Text>
                            <Text style={style.cardData2}>Black and red</Text>
                        </View>
                        <Image style={style.userShoes} source={require('../../images/shoes-white.png')} />
                    </View>
                </View>

                <View style={style.viewCardUp}>
                    <View style={[style.viewCardUpLeft, style.center, style.shadow]}>
                        <Text style={[style.cardUpText]}>Temps total</Text>
                        <Text style={style.cardData}>89.3 MIN</Text>
                    </View>
                    <View style={[style.viewCardUpRigth, style.center, style.shadow]}>
                        <Text style={[style.cardUpText]}>Distance total</Text>
                        <Text style={style.cardData}>10.3 KM</Text>
                    </View>
                </View>

                

            </View>

            <View style={[style.viewDown, { width }]}>

                <Text style={[{ fontSize: 20, fontWeight: "700", position: "absolute", left: 35, top: 25 }]}>Performances</Text>

                <View style={[{ flexDirection: "row", width: width, marginTop: 70, alignItems: "center", justifyContent: "center", justifyContent: "space-between", paddingHorizontal: 30}]}>
                    <View>
                        <View style={[style.viewDownLargCard, style.shadow]}>
                            <CircularProgress
                                value={7}
                                radius={50}
                                duration={1000}
                                progressValueColor={'#FFFFFF'}
                                activeStrokeColor={'#00CA85'}
                                maxValue={10}
                                title={'Lvl'}
                                titleColor={'#FFFFFF'}
                                inActiveStrokeColor={'#94A3A1'}
                                titleStyle={{fontWeight: '700', fontSize: 20}}
                                />
                        </View>
                    </View>

                    <View >
                        <View style={style.viewDownCard}>
                            <View style={style.containerImg}>
                                <Image style={style.cardImg} source={require('../../images/clock.png')} />
                            </View>
                            <View style={style.containerData}>
                                <Text style={[{ fontSize: 10, fontWeight: "600", color: "#D9D9D9" }]}>Temps moyen</Text>
                                <Text style={[{ fontSize: 12, fontWeight: "600", color: "#555555", marginTop: 5 }]}>29.5 min</Text>
                            </View>

                        </View>

                        <View style={style.viewDownCard}>
                            <View style={style.containerImg}>
                                <Image style={style.cardImg} source={require('../../images/distance.png')} />
                            </View>
                            <View style={style.containerData}>
                                <Text style={[{ fontSize: 10, fontWeight: "600", color: "#D9D9D9" }]}>Distance moyenne</Text>
                                <Text style={[{ fontSize: 12, fontWeight: "600", color: "#555555", marginTop: 5 }]}>4.8 km</Text>
                            </View>
                        </View>

                        <View style={style.viewDownCard}>
                            <View style={style.containerImg}>
                                <Image style={style.cardImg} source={require('../../images/speed.png')} />
                            </View>
                            <View style={style.containerData}>
                                <Text style={[{ fontSize: 10, fontWeight: "600", color: "#D9D9D9" }]}>Vitesse moyen</Text>
                                <Text style={[{ fontSize: 12, fontWeight: "600", color: "#555555", marginTop: 5 }]}>13.5 km/h</Text>
                            </View>
                        </View>
                    </View>
                </View>

                
                <View style={style.viewTopButton}>
                    <Pressable style={[style.button, style.shadow]} onPress={() => setModalVisible(true)}>
                        <Text style={style.buttonText}>START</Text>
                    </Pressable>
                </View>


            </View>

            <View>
                <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                style={[{backgroundColor: "#F7F7F7"}]}
                >

                    <View style={[{ borderWidth: 2, width: width, height: height, opacity: 0.8, backgroundColor: "#000"}]}></View>

                    <View style={[{ width: 365, height: 282, backgroundColor: "#F6F6F6", position: "absolute", justifyContent: "center", alignItems: "center", top: height/2-176, left: width/2-182, borderRadius: 50}]}>
                        
                        <View style={[{ flexDirection: "row", justifyContent: "space-around", width: width-20}]}>
                            <Pressable style={[{width: 142, height: 56, backgroundColor: "#CA0000", alignItems: "center", justifyContent: "center", borderRadius: 50}, style.shadow]} onPress={() => setModalVisible(false)}>
                                <Text style={style.buttonText}>Stop</Text>
                            </Pressable>
                            <Pressable style={[{width: 142, height: 56, backgroundColor: "#CA6100", alignItems: "center", justifyContent: "center", borderRadius: 50}, style.shadow]} /* onPress={() => navigation.navigate('Slider')} */>
                                <Text style={style.buttonText}>Pause</Text>
                            </Pressable>
                        </View>

                        <View style={[{ alignItems: "center", justifyContent: "space-around", width: width-20, marginTop: 20}]}>
                            <Text style={[{fontSize: 40, fontWeight: "700"}]}>0.85</Text>
                            <Text  style={[{fontSize: 20, fontWeight: "700", color: "#555555"}]}>Kilomètres</Text>
                        </View>

                        <View style={[{flexDirection: "row", width: width-20, justifyContent: "center", marginTop: 20}]}>

                            <View style={style.viewDownCardRun}>
                                <View style={style.containerImg}>
                                    <Image style={style.cardImg} source={require('../../images/clock.png')} />
                                </View>
                                <View style={style.containerData}>
                                    <Text style={[{ fontSize: 10, fontWeight: "600", color: "#555555" }]}>Temps</Text>
                                    <Text style={[{ fontSize: 12, fontWeight: "600", color: "#000000", marginTop: 5 }]}>29.5 min</Text>
                                </View>

                            </View>

                            <View style={style.viewDownCardRun}>
                                <View style={style.containerImg}>
                                    <Image style={style.cardImg} source={require('../../images/distance.png')} />
                                </View>
                                <View style={style.containerData}>
                                    <Text style={[{ fontSize: 10, fontWeight: "600", color: "#555555" }]}>Coin</Text>
                                    <Text style={[{ fontSize: 12, fontWeight: "600", color: "#000000", marginTop: 5 }]}>4.8 km</Text>
                                </View>
                            </View>

                            <View style={style.viewDownCardRun}>
                                <View style={style.containerImg}>
                                    <Image style={style.cardImg} source={require('../../images/speed.png')} />
                                </View>
                                <View style={style.containerData}>
                                    <Text style={[{ fontSize: 10, fontWeight: "600", color: "#555555" }]}>Vitesse</Text>
                                    <Text style={[{ fontSize: 12, fontWeight: "600", color: "#000000", marginTop: 5 }]}>13.5 km/h</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                </Modal>
            </View>


        </View>
    )
}


const style = StyleSheet.create({
    view: {
        alignItems: "center",
        backgroundColor: "#CEDDDA"
    },
    containerViewTop: {
        height: 500,
        paddingTop: 130,
        paddingHorizontal: 20,
        backgroundColor: "#CEDDDA"
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 20
    },
    viewCardUpLeft: {
        borderRadius: 30,
        width: 165,
        height: 98,
        alignItems: "center",
        backgroundColor: "#99A9A6",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    viewCardUpRigth: {
        borderRadius: 30,
        width: 165,
        height: 98,
        alignItems: "center",
        backgroundColor: "#99A9A6"
    },
    viewCardDown: {
        alignItems: "center"
    },
    viewCardDownLeft: {
        borderRadius: 30,
        paddingHorizontal: 20,
        width: 336,
        height: 109,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#99A9A6"
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
        color: "#FFFFFF",
        fontFamily: "Epilogue",
        fontWeight: "700",
        fontStyle: "normal"
    },
    cardUpText: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "700",
        color: "#D9D9D9"
    },
    cardDownText: {
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "700",
        color: "#D9D9D9"
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
        fontSize: 24,
        color: "#FFFFFF"
    },
    center: {
        alignContent: "space-around"
    },
    cardData2: {
        fontSize: 14,
        fontWeight: "700",
        color: "#C1C1C1"
    },
    viewDown: {
        //borderWidth: 1,
        alignItems: "center",
        //marginTop: 5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: 410,
        backgroundColor: "#F7F7F7",
        position: "absolute",
        bottom: 0,
    },
    viewDownCard: {
        //borderWidth: 1,
        flexDirection: "row",
        //justifyContent: "space-between",
        width: 150,
        height: 40,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 5
        //backgroundColor: "#F0FBF9",
    },
    viewDownCardRun: {
        //borderWidth: 1,
        flexDirection: "row",
        //justifyContent: "space-between",
        width: 120,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        //paddingLeft: 5,
        //borderRadius: 50,
        marginTop: 10,
        marginBottom: 5
        //backgroundColor: "#F0FBF9",
    },
    viewDownLargCard: {
       //borderWidth: 1,
        //flexDirection: "column",
        justifyContent: "center",
        //alignContent: "center",
        height: 150,
        width: 150,
        alignItems: "center",
        //paddingVertical: 10,
        borderRadius: 100,
        //marginVertical: 10,
        backgroundColor: "#94A3A1",

    },
    xpTitle: {
        textAlign: "left",
        //width: 270
    },
    xpBar: {
        backgroundColor: "#00CA85",
        height: 10,
        //width: 270,
        borderRadius: 50,
    },
    xpBarLv: {
        flexDirection: "row",
        justifyContent: "space-between",
        //width: 270
    },
    userShoes: {
        width: 64,
        transform: [{ rotateY: "180deg" }]
    },
    containerImg: {
        backgroundColor: "#D9D9D9",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    cardImg: {
        width: 20,
        height: 20
    },
    containerData: {
        marginLeft: 7,
        height: 40,
        //borderWidth: 1,
        flexDirection: "column",
    }
})

export default App;