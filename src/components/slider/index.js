import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const Slider = ({navigation}) => {
    return (
        <View>
            <Text>dezhvv</Text>
            <Animated.ScrollView
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            >
                <Slide label="home"/>
                <Slide label="inventory"/>
                <Slide label="shop"/>
            </Animated.ScrollView>
        </View>
    )
}

const Slide = ({label}) => {
    return(
        <View style={{ width, height }}>
            <Text>{label}</Text>
        </View>
    )
}

export default Slider;