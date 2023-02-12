import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Dialog = (props) => {
  const {
    setarr,
    arr,
    setisshow,
    name,
    mota,
    sdt,
    trangthai,
    setname,
    setmota,
    setsdt,
    settrangthai,
    setlinkanh,
    linkanh,
    editID,
    seteditID,
  } = props;


  function logger() {
    Alert.alert(
      "Thông báo",
      "link ảnh bị lỗi sẽ đổi thành ảnh mắc định !",
      [{ text: "OK", onPress: () => null }]
    );
  }
  let condition;
  function SaveEdit() {
    if (editID) {
      let arr2 = [...arr];

      arr2.map((item) => {
        if (item.id == editID) {
          item.name = name;
          item.mota = mota;
          item.linkanh = linkanh;
          item.sdt = sdt;
          item.trangthai = trangthai;
          seteditID(null);
        }
        return item;
      });
      setarr(arr2);
      setisshow(false);
    } else {
      setarr([
        ...arr,
        {
          id: arr[arr.length - 1]?.id + 1 || 1,

          name: name,
          mota: mota,
          sdt: sdt,
          trangthai: trangthai,
          linkanh: linkanh,
          linkvalid: condition,
        },
      ]);
    }
  }

  const checklinkanh = async () => {
    return (await fetch(linkanh)).status == 404;
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>

      <TextInput
        style={styles.edtext}
        onChangeText={(text) => setname(text)}
        value={name}
        placeholder="Nhập tên"
      />
      <TextInput
        style={styles.edtext}
        value={mota}
        onChangeText={(text) => setmota(text)}
        placeholder="Nhập địa chỉ"
      />
      <TextInput
        style={styles.edtext}
        value={sdt}
        onChangeText={(text) => setsdt(text)}
        placeholder="Nhập SDT"
      />
      <TextInput
        style={styles.edtext}
        value={trangthai}
        onChangeText={(text) => settrangthai(text)}
        placeholder="Nhập trạng thái"
      />
      <TextInput
        style={styles.edtext}
        value={linkanh}
        onChangeText={(text) => setlinkanh(text)}
        placeholder="Dán link ảnh"
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Text
            style={styles.button}
            onPress={() => {
              seteditID(null);
              setisshow(false);
            }}
          >
            Huỷ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            try {
              condition = await checklinkanh();
              console.log(condition);
              condition ? logger() : null;
            } catch (error) {
              logger();
            }
            SaveEdit();
          }}
        >
          <Text style={styles.button} 
            onPress={() => {
              seteditID(null);
              setisshow(false);
            }}
          >Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: "black",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#FF0000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "600",
    fontSize: 17,
    borderRadius: 10,
  },
  edtext: {
    padding: 5,
    margin: 20,
    backgroundColor: "white",
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    width: "90%",
    height: 40,
    margin: 5,
  }
});
