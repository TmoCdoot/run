import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import Home from '../home';
import Inventory from '../inventory';
import Shop from '../shop';


const { width, height } = Dimensions.get("window");


const App = () => {

    const test = useRef()
    var [page, setPage] = useState(0)    
    var [valScroll, setvalScroll] = useState()   

    return (
        <View>

            <Animated.ScrollView
            ref={test}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            pagingEnabled
            Ind
            onScroll={(event) => {
                setvalScroll(event.nativeEvent.contentOffset.x)
                if (event.nativeEvent.contentOffset.x > 0 && event.nativeEvent.contentOffset.x < width) {
                    setPage(0)
                } else if (event.nativeEvent.contentOffset.x > width-100 && event.nativeEvent.contentOffset.x < width*2) {
                    setPage(1)
                }   else if (event.nativeEvent.contentOffset.x > (width*2)-100 && event.nativeEvent.contentOffset.x < width*3) {
                    setPage(2)
                }
            }}
            >
                <Home label="home" />
                <Inventory label="inventory" />
                <Shop label="shop"/>
            </Animated.ScrollView>

            <View style={[style.viewTop, { width }]}>
                <View style={style.viewTopLeft}>
                    <Image style={style.img} source={require('../../images/coins.png')} />
                    <Text style={[{textAlign: "right", fontSize: 12, fontWeight: "700", color: "#555555"}]}>25 coins</Text>
                </View>
                <View style={style.viewTopRigth}>
                    <View style={[{flexDirection: "column", justifyContent: "flex-end"}]}>
                        <Text style={[{textAlign: "right", fontSize: 16, fontWeight: "700", color: "#9D9D9D"}]}>Hi</Text>
                        <Text style={[{textAlign: "right", fontSize: 20, fontWeight: "700", color: "#555555"}]}>Kevin XXX</Text>
                    </View>
                    <Image style={style.imgUser} source={require('../../images/user.png')} />
                </View>
            </View>

            <Animated.View style={[style.container, {width}]}>

                <Pressable onPress={() => {
                    test.current.scrollTo({x: 0, animated: true})
                    //setPage(0)
                }}
                >
                    <Image style={style.img} source={page == 0 ? require('../../images/run-active.png') :   require('../../images/run.png')} />
                </Pressable>

                <Pressable onPress={() => {
                    test.current.scrollTo({x: width, animated: true})
                    //setPage(1)
                }}
                >
                    <Image style={style.img} source={page == 1 ? require('../../images/inventory-active.png') :   require('../../images/inventory.png')} />
                </Pressable>

                <Pressable onPress={() => {
                    test.current.scrollTo({x: width*2, animated: true})
                    //setPage(2)
                }}
                >
                    <Image style={style.img} source={page == 2 ? require('../../images/bag-active.png') :   require('../../images/bag.png')} />
                </Pressable>
                
            </Animated.View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        //borderWidth: 1,
        position: "absolute",
        bottom: 0,
        height: 85,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        //backgroundColor: "#F0FBF9",
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
        paddingHorizontal: 30,
        alignItems: "flex-end",
        zIndex: 989
    },
    viewTopLeft: {
        //borderWidth: 1,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    viewTopRigth: {
        //borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        width: 25,
        height: 25,
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