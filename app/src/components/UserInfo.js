import React from "react";
import { View,Image,Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserInfo = () => {
    const PlaceholderLogo = require('../assets/images/logo.png');
    return(
        <LinearGradient colors={['#00C366', '#13844E', '#13844E']}>
        <View style={{flexDirection:'row',alignItems:'center', padding: 20,}}>
          <View style={{marginHorizontal:10, backgroundColor:'#fff', borderRadius:50, minWidth:60, height:60}}>
            <Image></Image>
          </View>
          <View>
            <Text style={styles.titleCard}>Tên đại lý</Text>
            <Text style={styles.subtitleCard}>Chi nhánh</Text>
          </View>
        </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    titleCard:{
        color:'#fff',
        fontSize:17,
      },
      subtitleCard:{
        fontSize:14,
        color:'#fff',
      },
      imgUser:{
        objectFit:'cover',
      },
})

export default UserInfo;