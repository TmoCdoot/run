import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView } from 'react-native';
import { useRef } from 'react';

const { width, height } = Dimensions.get("window");

const Slider = () => {
    return (
        <View style={[style.view, { width, height }]}>
            <Text>inventory</Text>
        </View>
    )
}


const style = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Slider;