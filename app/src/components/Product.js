import React, { useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from "react-native";
import { product } from "../data/product";
import { Card } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AntDesign } from '@expo/vector-icons';

export default function ProductCardArea(props) {
  const [liked, setLiked] = useState([]);

  const toggleLike = (productId) => {
    if (liked.includes(productId)) {
      setLiked(liked.filter((id) => id !== productId));
    } else {
      setLiked([...liked, productId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color:'#13844E',fontSize:12,fontWeight:400,marginBottom:4}}>
        {props.label} <AntDesign name="down" size={12} color="black" />
        </Text>
      <ScrollView horizontal >
        {product.map((prod, index) => {
          const isLiked = liked.includes(prod.id);
          return (
            <View style={styles.cardContainer} key={index}>
              <Card >
                <Image source={prod.image} style={{marginBottom:4}}/>
                <Text style={{ color: "black", fontSize:11 }}>{prod.title}</Text>
                <Text style={{ color: "black", fontSize:11 }}>{prod.subTitle}</Text>
                <Text style={{ color: "#EC3237", fontSize:11, fontWeight:600 }}>{prod.price} VND</Text>
                <Text style={{ color: "black", fontSize:11 }}>Giá bán sỉ: <Text style={{color:"#55C1E3"}}>{prod.priceSi} VND</Text></Text>
                <Text style={{ color: "black", fontSize:11 }}>Giá bán lẻ: <Text style={{color:"#55C1E3"}}>{prod.priceLe} VND</Text></Text>
                <Pressable onPress={() => toggleLike(prod.id)} position="absolute" right={5} top={5}>
                  <FontAwesome name="heart" onPress={() => toggleLike(prod.id)} style={{color:isLiked ? "red" : "white",fontSize:20}}>
                  </FontAwesome>
                </Pressable>
              </Card>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginBottom:10,
    backgroundColor: "#fff",
  },
  cardContainer: {
    marginRight: 12, // Add some margin to separate cards
  },
});
