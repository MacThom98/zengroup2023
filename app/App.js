import React from 'react';
import { StatusBar } from 'react-native';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import BannerImg from './src/components/Banner';
import UserInfo from './src/components/UserInfo';
import StatusArea from './src/components/Status';
import ServicesArea from './src/components/Services';
import ProductCardArea from './src/components/Product';
import HookAPI from './src/components/HookAPITest';
export default function App() {
  return (
    <ScrollView style={styles.container} >
      <BannerImg />
      <UserInfo />
      <StatusArea/>
      <ServicesArea/>
      <View style={styles.RepurchaseArea}>
          <ProductCardArea label="Đặt lại"/>
          <ProductCardArea label="Bán chạy"/>
      </View>
      <View>
        <Text>
          Data Test:
          <HookAPI></HookAPI>
        </Text>
      </View>
      <StatusBar style='light'/>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  RepurchaseArea:{
    minHeight:150,
  },

});
