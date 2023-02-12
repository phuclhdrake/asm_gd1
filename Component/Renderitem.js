import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
const Renderitem = (props) => {
  let linkdefau = "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/326557291_597514389085059_1219839809482759199_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zF3FITB_plgAX-pBjrw&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBkWy3yTxqrajCruAOOYldPWQcsEUksXTSIQM-M4CzIJQ&oe=63EDFFA7";

  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "#CC6600",
          flexDirection: "row",
          marginVertical: 3,
          width: "95%",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 4,
          marginTop: 10,
          marginLeft: 4,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 999,borderWidth:0.5, marginRight: 7, marginTop: 7}}
            source={{
              uri: props.item.condition ? props.item.linkanh : linkdefau,
            }}
          />

          <View >
          <Text
              style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "600" }}
            >{`ID: ${props.item.id}`}</Text>
            <Text
              style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "600" }}
            >{`Tên: ${props.item.name}`}</Text>
            <Text
              style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "600" }}
            >{`Địa chỉ: ${props.item.mota}`}</Text>
            <Text
              style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "600" }}
            >{`SDT: ${props.item.sdt}`}</Text>
            <Text
              style={{ marginHorizontal: 5, fontSize: 15, fontWeight: "600" }}
            >{`Trạng thái: ${props.item.trangthai}`}</Text>
          </View>
          
        </View>

        <View style={{marginBottom: 3,}}>
          <TouchableOpacity
            onPress={() => {
              props.onDelete(props.item);
            }}
          >
            <Text style={styles.button}>Xoá</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.onEdit(props.item.id);
            }}
          >
            <Text style={styles.button}>Sửa</Text>
          </TouchableOpacity>
          
        </View>
       
      </View>
      
    </View>
  );
};

export default Renderitem;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: "#FF0000",
    color: "white",
    marginTop:15,
  },
});
