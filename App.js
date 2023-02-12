import { Button, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Manager from "./Manager";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./Screen2";

const Stack = createNativeStackNavigator();

const App = () => {
  const Home = (props) => {
    let data = [
      {
        id: 1,
        name: "Bùi Văn A",
        mota: "Hà Nội",
        sdt: "0347990766",
        trangthai: "1/0",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 2,
        name: "Bùi Văn A",
        mota: "Hà Nội",
        sdt: "0347990766",
        trangthai: "1/0",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 3,
        name: "Bùi Văn A",
        mota: "Hà Nội",
        sdt: "0347990766",
        trangthai: "1/0",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 4,
        name: "Bùi Văn A",
        mota: "Hà Nội",
        sdt: "0347990766",
        trangthai: "1/0",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 5,
        name: "Bùi Văn A",
        mota: "Hà Nội",
        sdt: "0347990766",
        trangthai: "1/0",
        linkanh: "",
        linkvalid: false,
      },
      {
        id: 6,
        name: "Bùi Văn A",
        mota: "Hà Nội",
        sdt: "0347990766",
        trangthai: "1/0",
        linkanh: "",
        linkvalid: false,
      },
    ];

    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <Image
          source={{
            uri: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/326557291_597514389085059_1219839809482759199_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zF3FITB_plgAX-pBjrw&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBkWy3yTxqrajCruAOOYldPWQcsEUksXTSIQM-M4CzIJQ&oe=63EDFFA7",
          }}
          style={{
            borderWidth: 2,
            borderRadius: 99,
            width: 200,
            height: 200,
            alignSelf: "center",
            marginVertical: 10,
          }}
        />
        <View style={{ height: 20 }}></View>
        <View style={styles.nut}>
        <Button 
          title="Quản lý cửa hàng"
          onPress={() =>
            props.navigation.navigate("manager", {
              data: [...data],
            })
          }
        />
        </View>
        <View style={{ height: 20 }}></View>
        <View style={styles.nut}>
        <Button
          title="Thông tin cá nhân"
          onPress={() =>
            props.navigation.navigate("about", {
              name: "Lê Hồng Phúc",
              mssv: "PH20309",
              data: data,
            })
          }
        />
        </View>
        <View></View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="manager" component={Manager} />
        <Stack.Screen name="about" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  nut:{
    borderWidth: 2,
    width: 200,
    alignSelf: "center",
    backgroundColor: "#FF9966",
  }
});
