import { View, Text, StyleSheet,TextInput,Image,FlatList,Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import search from '../assets/Search--Streamline-Bootstrap.png';
import check from '../assets/check-removebg-preview.png'
import nocheck from '../assets/nocheck-removebg-preview.png'
import edit from '../assets/edit-removebg-preview.png'
import dlt from '../assets/Trash--Streamline-Bootstrap.png'
import add from '../assets/add-removebg-preview.png'
const MyApp = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07')
    .then(response=>response.json())
    .then(json=>setData(json))
    .catch(error => console.error(error));
  }, []);
  const toggleCheck = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
const deleteItem = (id) => {
    fetch(`https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setData(prevData => prevData.filter(item => item.id !== id));
      })
      .catch(error => console.error(error));
  };

 
  const navigation = useNavigation();
  return (
   <View>
   </View>
   )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MyApp;