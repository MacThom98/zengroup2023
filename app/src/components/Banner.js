import React from "react";
import { View,Image, StyleSheet } from "react-native";


const BannerImg = () => {
    const PlaceholderImage = require('../assets/images/banner.png');
    return(
        <View style={styles.bannerContainer}>
            <Image source={PlaceholderImage} style={styles.banner} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    bannerContainer: {
        width:'100%',
        minHeight:100,
      },
      banner: {
        objectFit:'contain',
      },
})
export default BannerImg;