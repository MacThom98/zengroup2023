import React from "react";
import { Text,View,StyleSheet,FlatList, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { services } from "../data/service";


function onPress(){
  alert('ok');
}
const ServicesArea = () => {
  
    return(
        <View style={styles.ServicesArea}>
        <LinearGradient colors={['#044626','#00C366', '#13844E', '#13844E','#055F34']}>
        <FlatList style={{marginHorizontal:26, marginVertical:18}} 
          data={services} 
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button}onPress={onPress}>
                  <Image source={item.icon} style={{objectFit:'contain',width:36}}/>
                </Pressable>
              </View>
              <Text style={{fontSize:12,color:"#FFF"}}>{item.nameService}</Text>
            </View>
          )}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent:'space-between',
            alignItems:'center',
            
          }}/>
          </LinearGradient>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    ServicesArea:{ 
        minHeight:100,
        marginBottom:10,
      },
      item:{
        gap:4,
        width:100,
        alignItems:'center',
        marginVertical:8,
        // borderColor:'red',
        // borderWidth:4,
      },
      buttonContainer:{
        backgroundColor:"white",
        shadowColor:'gray',
        shadowOffset: {width:0,height:4},
        shadowOpacity:0.1,
        shadowRadius: 7,
        borderRadius: 16,
        alignItems:'center',
        width: 64,
        height: 64,
      },
      button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
      },
})

export default ServicesArea;