import React, { useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import UsuarioItem from "../components/UsuarioItem";

const EjemploFlatList = (props) => {
useEffect(()=>{
    cargarUsuarios();
},[]);

const [arreglo,setArreglo] = React.useState([]);

const cargarUsuarios = () =>{
    fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((json) => {
        console.log(json.data);
        setArreglo(json.data);
    })
    .catch(() => {
        Alert.alert('Error!!');
    });
};
  return (
    <FlatList
        data = {arreglo}
        renderItem = {(item) => <UsuarioItem
                            avatar = {item.item.avatar}
                            nombre = {item.item.first_name}
                            apellido = {item.item.last_name}
                            email = {item.item.email}
                            navigation = {props.navigation}
                            />}
        keyExtractor = {(item,index) => `e${item.id}`}
    />
  );
};

export default EjemploFlatList;
