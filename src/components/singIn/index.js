import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button,Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const SingIn = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={[style.form, style.shadow]}>
                <Image style={style.img} source={require('../../images/logo.png')} />
                <SafeAreaView style={style.safeArea}>
                    <TextInput style={[style.input, style.shadow]} placeholder='Email'/>
                    <TextInput style={[style.input2, style.shadow]} placeholder='Password'/>
                    <Text style={style.text}>Forgot your password ?</Text>
                    <Pressable style={[style.button, style.shadow]} onPress={() => navigation.navigate('Slider')}>
                        <Text style={style.buttonText}>Sing In</Text>
                    </Pressable>                    
                </SafeAreaView>
            </View>
            <Text style={style.buttonSingUp} onPress={() => navigation.navigate('SingUp')}>Sing Up</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CEDDDA",
    },
    form: {
        fontFamily: "Epilogue",
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        //borderWidth: 1,
        width: 343,
        height: 320,
        borderRadius: 50,
    },
    input: {
        backgroundColor: "#CEDDDA",
        //borderWidth: 1,
        color: "black",
        width: 300,
        height: 33,
        marginBottom: 26,
        borderRadius: 15,
        paddingLeft: 10,
    },
    input2: {
        backgroundColor: "#CEDDDA",
        //borderWidth: 1,
        color: "black",
        width: 300,
        height: 33,
        marginBottom: 15,
        borderRadius: 15,
        paddingLeft: 10,
    },
    img: {
        width: 100,
        height: 100,
    },
    noMargin: {
        marginBottom: 0,
    },
    text: {
        textAlign: "center",
        marginTop: 0,
        color: "#BABABA"
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
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "Epilogue",
        fontWeight: "700",
        fontStyle: "normal"
    },
    safeArea: {
        alignItems: "center"
    },
    buttonSingUp: {
        position: "absolute",
        bottom: 70,
        color: "#00CA85",
        fontSize: 17
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    
        elevation: 10,
    },
})

export default SingIn;
