import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { useRef } from 'react';

const { width, height } = Dimensions.get("window");

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
      }
    
  ];
  
  const Item = ({ title }) => (
    <View style={style.viewItem}>
        <Image style={style.img} source={require('../../images/shoes.png')} />
    </View>
  );

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title}/>
    );

    return (
        <View style={[style.view, { width, height }]}>

            <Text style={[style.title]}>Inventory</Text>

            <View style={style.listContainer}>
                <Text style={style.noItem}>No item</Text>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={[style.scrollView, { width }]}
                />
            </View>
                
        </View>
    )
}


const style = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        //justifyContent: "center"
    },
    title: {
        marginTop: 120,
        fontWeight: "700",
        fontSize: 20,
        color: "#555555"
    },
    scrollView: {
        flex: 1,
        opacity: 0.05
    },
    viewItem: {
        //borderWidth: 2,
        width: 160,
        height: 130,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: (width - 320) / 4,
        marginVertical: 20,
        backgroundColor: "#CEDDDA"
    },
    listContainer: {
      marginTop: 10,
      height: height - 200
    },
    noItem: {
        position: "absolute",
        bottom: height/2 - 125,
        left: width/2 - 25,
        fontSize: 15,
        fontWeight: "700",
        color: "#BABABA"
    },
    img: {
      transform: [{ rotateY: "180deg" }]
    }
})

export default App;