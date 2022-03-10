import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return <WebView source={{ uri: "https://jbeeshop.shop" }} />;

  // const onPressButton = () => {
  //   alert("button clicked");
  // };
  // return (
  //   <View style={styles.container}>
  //     <Text>엥</Text>
  //     <StatusBar style="auto" />
  //     <StatusBar style="auto" />
  //     <Button title="상품 등록하기" onPress={onPressButton} />

  //     <TouchableOpacity onPress={onPressButton}>
  //       <Image />
  //     </TouchableOpacity>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
