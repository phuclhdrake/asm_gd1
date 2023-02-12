import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import Manager from "./Manager";
import App from "./App";

const Screen2 = (props) => {

  let name = props.route.params.name;
  let mssv = props.route.params.mssv;
  let data = props.route.params.data;
  return (
    <View >
      <Image
          source={{
            uri: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/321117290_1279617352601570_1286791866500304638_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=54TC4DpWjRgAX-n8zQT&_nc_ht=scontent.fhan2-3.fna&oh=00_AfD91Y8rdycR6_2lqzKidJVFelUX4nOAf4IzbT9_r5iPrg&oe=63ED7488",
          }}
          style={{
            borderWidth: 2,
            borderRadius:99,
            width: 200,
            height: 200,
            alignSelf: "center",
            marginVertical: 10,
            marginBottom: 20,
          }}
        />
      <Text style={styles.text}>Họ và tên: {name}</Text>
      <Text style={styles.text}>MSV: {mssv}</Text>
      <View style={styles.btn}>
        <Button 
          title="Quản lý cửa hàng"
          onPress={() => 
            props.navigation.navigate("manager", {
              data: [...data],
            })
          }
        />
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  btn: {
    marginTop: 150,
    borderWidth: 2,
    width: 200,
    alignSelf: "center",
    backgroundColor: "#FF9966",
  }
});
