import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button, Animated, Dimensions, Image, ScrollView, FlatList, Modal } from 'react-native';
import { useRef } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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
        id: '58694dazda0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbdzadea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68adqsfc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694adqs0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '58694dqsa0f-3da1-471f-bd96-145571e29d72',
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
        id: '58694a0f-3dqsda1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: '58694a0fdaz-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
      }
    
  ];
  


const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <Item title={item.title}/>
    );

    const Item = ({ title }) => (
      <Pressable disabled={true} onPress={() => setModalVisible(true)}>
        <View style={[style.viewItem, style.shadow]}>
          <Image style={style.img} source={require('../../images/shoes.png')} />
        </View>
      </Pressable>
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

          <View style={[{alignContent: "center", justifyContent: "center"}]}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              style={[{backgroundColor: "#F7F7F7"}]}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >

              <View style={[{backgroundColor: "#000", width: width, height: height, opacity: 0.75}]}></View>

              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={style.buttonClose}
              >
                <Image style={style.imgClose} source={require('../../images/close.png')} />
              </Pressable>
              
              <View style={style.containerModal}>

                <View>
                  <View style={[style.modalImage, style.shadow]}>
                    <View style={style.containerViewItem}>
                      <Image style={style.imgViewItem} source={require('../../images/shoes.png')} />
                    </View>
                  </View>

                  <View style={[style.modalName, style.view]}>
                    <Text style={[{fontSize: 24, fontWeight: "700", color: "#555555"}]}>X-Runner HIGH</Text>
                    <Text style={[{fontSize: 14, fontWeight: "700", color: "#C1C1C1"}]}>Black and red</Text>
                  </View>

                  <View style={style.modalData}>
                    <View style={[{flexDirection: "row"}]}>
                        <View style={[style.viewDownCard, { marginRight: 25}]}>
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
                    </View>
                        
                    <View style={[{flexDirection: "row"}]}>
                        <View style={[style.viewDownCard, { marginRight: 25}]}>
                            <View style={style.containerImg}>
                                <Image style={style.cardImg} source={require('../../images/speed.png')} />
                            </View>
                            <View style={style.containerData}>
                                <Text style={[{ fontSize: 10, fontWeight: "600", color: "#D9D9D9" }]}>Vitesse moyen</Text>
                                <Text style={[{ fontSize: 12, fontWeight: "600", color: "#555555", marginTop: 5 }]}>13.5 km/h</Text>
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

                  <View style={[style.modalButton, style.shadow]}>
                    <Pressable style={[style.button, style.shadow]}>
                        <Text style={style.buttonText}>AMELIORER</Text>
                    </Pressable>
                  </View>
                </View>

              </View>
              
            </Modal>   
          </View>
            

        </View>
    )
}


const style = StyleSheet.create({
  containerModal: {
      height: height - 160,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      position: "absolute",
      bottom: 0,
      width: width,
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonClose: {
      //backgroundColor: "yellow",
      position: "absolute",
      bottom: height - 120,
      alignSelf: "center"
    },
    imgClose: {
      width: 30,
      height:30
    },
    view: {
        //flex: 1,
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
      height: height - 230
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
    },
    containerViewItem: {
      width: 330,
      height: 270,
      backgroundColor: "#D9D9D9",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    imgViewItem: {
      width: 150,
      height: 150
    },
    modalName: {
      marginTop: 30
    },
    modalData: {
      marginTop: 30,
      marginBottom: 25
    },
    modalButton: {
      alignItems: "center"
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
  button: {
    backgroundColor: "#00CA85",
    width: 170,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
    fontSize: 20
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Epilogue",
    fontWeight: "700",
    fontStyle: "normal"
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