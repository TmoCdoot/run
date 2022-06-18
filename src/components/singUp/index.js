import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Image, Pressable } from 'react-native';

const SingUp = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={[style.form, style.shadow]}>
                <Image style={style.img} source={require('../../images/logo.png')} />
                <SafeAreaView style={style.safeArea}>
                    <TextInput style={[style.input, style.shadow]} placeholder='Email'/>
                    <TextInput style={[style.input, style.shadow]} placeholder='Password'/>
                    <TextInput style={[style.input, style.shadow]} placeholder='Confirm password'/>
                    <Pressable style={[style.button, style.shadow]}>
                        <Text style={style.buttonText}>Sing Up</Text>
                    </Pressable>   
                </SafeAreaView>
            </View>
            <Text style={style.buttonSingUp} onPress={() => navigation.navigate('SingIn')}>Sing In</Text>
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
        height: 360,
        borderRadius: 50,
    },
    input: {
        backgroundColor: "#CEDDDA",
        //borderWidth: 1,
        width: 300,
        height: 30,
        marginBottom: 26,
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
        marginTop: 7,
        color: "#BABABA"
    },
    button: {
        backgroundColor: "#00CA85",
        width: 200,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
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
        fontWeight: "700",
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

export default SingUp;
