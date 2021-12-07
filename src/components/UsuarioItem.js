import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UsuarioItem = (props) => {
  return (
    <TouchableOpacity onPress = { ()=>{
      props.navigation.navigate("DetalleItem",{
        nombre: props.nombre,
        apellido: props.apellido,
        avatar: props.avatar
      });
    }}>
    <View style={{ 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }}>
    <Image source={{
        uri: props.avatar
    }} style = {{width:100, 
                height:100}} />
      <Text>{props.nombre}</Text>
      <Text>{props.apellido}</Text>
      <Text>{props.email}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default UsuarioItem;
