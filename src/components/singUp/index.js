import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Image } from 'react-native';

const SingUp = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.form}>
                <Image style={style.img} source={require('../../images/logo.png')} />
                <SafeAreaView>
                    <TextInput style={style.input} placeholder='Email'/>
                    <TextInput style={style.input} placeholder='Password'/>
                    <TextInput style={style.input} placeholder='Confirm password'/>
                    <Button title='Sign Up'/>
                    <Button title='Sign In' onPress={() => navigation.navigate('SingIn')}/>
                    <Button title='slide' onPress={() => navigation.navigate('Slider')}/>
                </SafeAreaView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0FBF9",
    },
    form: {
        flex: 0.3,
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        width: 343,
        height: 307,
        borderRadius: 50,
    },
    input: {
        borderWidth: 1,
        width: 300,
        height: 30,
    },
    img: {
        width: 100,
        height: 100,
    }
})

export default SingUp;
