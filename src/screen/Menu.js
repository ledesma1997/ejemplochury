import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const Menu = (props) => {
  return (
    <ScrollView>
      <Button title="Datos Personales" onPress={()=>{
        props.navigation.navigate("DatosPersonales");
      }}/>
      <Button title="Ejemplo Hook" onPress={()=>{
        props.navigation.navigate("EjemploHook");
      }}/>
      <Button title="Ejemplo State" onPress={()=>{
        props.navigation.navigate("EjemploState");
      }}/>
      <Button title="Componente" onPress={()=>{
        props.navigation.navigate("Componente");
      }}/> 
      <Button title="Ejemplo Lista" onPress={()=>{
        props.navigation.navigate("EjemploFlatList");
      }}/> 
    </ScrollView>
  );
};

export default Menu;
