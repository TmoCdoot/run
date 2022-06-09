import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';

const oui = () => {
    return (
        <View style={style.container}>
            <View style={style.form}>
                <Text>dze</Text>
                <SafeAreaView>
                    <TextInput style={style.input} placeholder='Email'/>
                    <TextInput style={style.input} placeholder='Password'/>
                    <Text>Forgot your password ?</Text>
                    <Button title='Sign In'/>
                    <Button title='Sign Up'/>
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
    }
})

export default oui;
