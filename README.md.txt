npx expo install react-native-safe-area-context
=> sử dụng safe-area-context để nội dung tránh bị đề bởi các phần vật lý của máy
To use the library, you first need to import <SafeAreaProvider> in your app's root component:
		import { View, Text } from 'react-native';
		import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
return (
    <SafeAreaProvider>
   	<View>
   		<Text>My App</Text>
   	</View>
   </SafeAreaProvider>
  );
}

