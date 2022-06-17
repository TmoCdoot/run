import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView, Pressable, FlatList } from 'react-native';

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
      id: '58694a0f-3ddsa1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471dsqf-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbedada-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1dws-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '5869qsda0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
      },
      {
        id: 'bd7acbea-cdqs1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-cdqs605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3dadqs1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '586dq94a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
      }
    
  ];
  
  const Item = ({ title }) => (
    <View style={[style.viewItem, style.shadow]}>
        <Image style={style.img} source={require('../../images/shoes.png')} />
    </View>
  );

const App = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title}/>
    );
    
    return (
        <View style={[style.view, { width, height }]}>

            <Text style={[style.title]}>Shop</Text>
            <View style={[style.containerFilter, style.shadow]}>

                <View style={[style.itemType, style.shadow]}>
                    <Pressable style={style.buttonActive} /* onPress={() => navigation.navigate('Slider')} */>
                        <Text style={style.switchText}>Items</Text>
                    </Pressable>   
                    <Pressable style={style.buttonNoActive} /* onPress={() => navigation.navigate('Slider')} */>
                        <Text style={style.switchText}>Booster</Text>
                    </Pressable>   
                    <Pressable style={style.buttonNoActive} /* onPress={() => navigation.navigate('Slider')} */>
                        <Text style={style.switchText}>Coin</Text>
                    </Pressable>   
                </View>

                <View style={style.otherFilter}>
                    
                    <Pressable style={[style.selectFilter, style.shadow]} /* onPress={() => navigation.navigate('Slider')} */>
                            <Text style={style.filterText}>Filters ↓</Text>
                    </Pressable> 

                    <View style={[style.modelItem, style.shadow]}>
                        <Pressable style={style.buttonNoActiveModel} /* onPress={() => navigation.navigate('Slider')} */>
                            <Text style={style.switchTextModel}>Sneakers</Text>
                        </Pressable>   
                        <Pressable style={style.buttonActiveModel} /* onPress={() => navigation.navigate('Slider')} */>
                            <Text style={style.switchTextModel}>T-shirt</Text>
                        </Pressable>   
                        <Pressable style={style.buttonNoActiveModel} /* onPress={() => navigation.navigate('Slider')} */>
                            <Text style={style.switchTextModel}>Bob</Text>
                        </Pressable>   
                    </View>
                </View>
                
                
            </View>

            <View style={style.listContainer}>
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
    },
    img: {
        transform: [{ rotateY: "180deg" }]
    },
    title: {
        marginTop: 120,
        fontWeight: "700",
        fontSize: 20,
        color: "#555555",
    },
    containerFilter: {
        width: 330,
        height: 125,
        backgroundColor: "#CEDDDA",
        borderRadius: 20,
        //borderWidth: 2,
        marginTop: 10,
        alignItems: "center",
        zIndex: 900,
        marginBottom: 20
    },
    itemType: {
        //borderWidth: 2,
        flexDirection: "row",
        width: 270,
        justifyContent: "space-around",
        borderRadius: 20,
        height: 40,
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "#99A9A6"
    },
    switchText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFFFFF"
    },
    buttonActive: {
        backgroundColor: "#00CA85",
        borderRadius: 20,
        height: 30,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        //borderWidth: 2
    },
    buttonNoActive: {
        borderRadius: 20,
        height: 40,
        width: 85,
        alignItems: "center",
        justifyContent: "center",
    },
    selectFilter: {
        borderRadius: 20,
        //borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#99A9A6",
    },
    filterText: {
        fontSize: 10,
        fontWeight: "700",
        color: "#FFFFFF"
    },
    modelItem: {
        //borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        width: 170,
        height: 25,
        justifyContent: "space-around",
        borderRadius: 20,
        backgroundColor: "#99A9A6"
    },
    otherFilter: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 250,
        marginTop: 17
    },
    buttonActiveModel: {
        backgroundColor: "#00CA85",
        borderRadius: 20,
        height: 20,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        //borderWidth: 2
    },
    buttonNoActiveModel: {
        borderRadius: 20,
        height: 20,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    switchTextModel: {
        fontSize: 10,
        fontWeight: "700",
        color: "#FFFFFF"
    },
    scrollView: {
        flex: 1,
        //opacity: 0.05
    },
    listContainer: {
        height: height - 370
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
        backgroundColor: "#D9D9D9"
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

export default App;