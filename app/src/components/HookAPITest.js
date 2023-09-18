import { useFocusEffect } from 'expo-router';
import { Button } from 'react-native-paper';
import { View, Text, Pressable, StyleSheet } from 'react-native';
export default function HookAPI() {
const url= " https://api.flexzen.app/auth/local";
const handlePress = async () => {
    fetch({url})
      .then((response) => response.json())
      .then((responseJson) => {
    <Text>("Data: " + {responseJson});</Text>
      })
      .catch((error) => {
        console.error(error);
      });
  }    
  return (
    <View> 
        <Text>OK</Text>
    
        
            <Pressable style={styles.button} onPress={handlePress}>
                <Text>Press In</Text>
                  {/* <Image source={item.icon} style={{objectFit:'contain',width:36}}/> */}
                </Pressable>
           
    
    </View>       
)

}
const styles = StyleSheet.create({
   button:{
    backgroundColor:'red',
   }
})