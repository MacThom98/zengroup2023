import React from "react";
import { Text,View,StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { statusOrder } from "../data/statusOrder";

const StatusArea = () => {
  const data = statusOrder;
    return(
      <View style={styles.StatusArea}>
      <FlatList
        horizontal 
        style={{ marginHorizontal: 16 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Card style={styles.badgeContainer}>
              <View style={styles.innerCard}>
                <Text style={{ color: "#13844E", fontSize: 14 }}>
                  {item.quantity}
                </Text>
              </View>
              <View style={styles.innerCard}>
                <Text style={{ fontSize: 12 }}>{item.title}</Text>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
    StatusArea:{
        minHeight:80,
      },
    badgeContainer:{
        padding:10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#EFEFEF",
        shadowColor:'gray',
        shadowOffset: {width:0,height:4},
        shadowOpacity:0.1,
        shadowRadius: 7,
        borderRadius: 6,
    },
    innerCard: {
      alignItems: "center",
    },
})

export default StatusArea;