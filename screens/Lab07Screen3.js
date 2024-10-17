// import { View, Text, StyleSheet,TextInput,Image,FlatList,Pressable } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import book from '../assets/book.png'

// const MyApp = () => { 
//   const navigation = useNavigation();
//   const [data, setData] = useState([]);
//   const [newJob, setNewJob] = useState('');
//   useEffect(() => {
//     fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, []);
//   const addItem = () => {
//     if (newJob.trim() === '') return;

//     const newId = data.length + 1; 

//     const newItem = {
//       id: newId,
//       des: newJob,
//     };
  
//   fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newItem),
//     })
//       .then(response => response.json())
//       .then(json => {
//         setData(prevData => [...prevData, json]);
//         setNewJob('');
//         navigation.navigate('index2');
//       })
//       .catch(error => console.error(error));
//   };


//   return (
    
//    <View style={{backgroundColor:'white',width:"100%",height:"100%",flex:1, alignItems:'center'}
//    }>
//    <Text style={{
//      width:'100%',
//      height:48,
//      fontFamily:'Epilogue',
//      fontWeight:700,
//      fontSize:32,
//      lineHeight:48,
//      textAlign:'center',
//     marginTop:40,
//     marginBottom:20,
//    }}
//    >ADD YOUR JOB</Text>
//    <View style={{
//             flexDirection:'row',
//          width:'90%',
//           height:43,
//           justifyContent:'center',
//           alignItems:'center',
//           borderColor:'grey',
//           borderStyle:'solid',
//           borderWidth:2,
//           borderRadius:5,
//           marginBottom:20,
//         }}
//         >
//           <Image source={book} style={{
//             marginLeft:10,
//             width:24,height:24
//           }}
//           />
//           <TextInput style={{
//             marginLeft:10,
//             width:'100%',
//             height:43,
//           }}
//            placeholder='Input your job'onChangeText={setNewJob} value={newJob}/>
//         </View >
//         <Pressable style={styles.button} onPress={addItem}>
//           <Text style={styles.textButton}>Finish -></Text>
//         </Pressable>
//    </View>
//    )
// };

// const styles ={
//   button:{
//     width:190,
//     height:44,
//     backgroundColor:'#00BDD6',
//     borderRadius:12,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   textButton:{
//     width:128,
//     height:26,
//     fontFamily:'Inter',
//     fontStyle:'normal',
//     fontWeight:400,
//     fontSize:16,
//     lineHeight:26,
//     color:'#FFFFFF',
//     textAlign:'center'
//   }
// }


// export default MyApp;
import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import book from '../assets/book.png';

const MyApp = () => { 
  const navigation = useNavigation();
  const route = useRoute();
  const [newJob, setNewJob] = useState('');
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (route.params?.item) {
      setItem(route.params.item);
      setNewJob(route.params.item.des);
    }
  }, [route.params?.item]);

  const addItem = () => {
    if (newJob.trim() === '') return;

    const newItem = {
      des: newJob,
      checked: false,
    };

    fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(json => {
        setNewJob('');
        navigation.navigate('index2');
      })
      .catch(error => console.error(error));
  };

  const updateItem = () => {
    if (newJob.trim() === '') return;

    const updatedItem = {
      ...item,
      des: newJob,
    };

    fetch(`https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then(response => response.json())
      .then(json => {
        setNewJob('');
        navigation.navigate('index2');
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={{ backgroundColor: 'white', width: "100%", height: "100%", flex: 1, alignItems: 'center' }}>
      <Text style={{
        width: '100%',
        height: 48,
        fontFamily: 'Epilogue',
        fontWeight: 700,
        fontSize: 32,
        lineHeight: 48,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
      }}>
        {item ? 'UPDATE YOUR JOB' : 'ADD YOUR JOB'}
      </Text>
      <View style={{
        flexDirection: 'row',
        width: '90%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
      }}>
        <Image source={book} style={{
          marginLeft: 10,
          width: 24, height: 24
        }} />
        <TextInput style={{
          marginLeft: 10,
          width: '100%',
          height: 43,
        }}
          placeholder='Input your job' onChangeText={setNewJob} value={newJob} />
      </View>
      <Pressable style={styles.button} onPress={item ? updateItem : addItem}>
        <Text style={styles.textButton}>Finish -></Text>
      </Pressable>
    </View>
  );
};

const styles = {
  button: {
    width: 190,
    height: 44,
    backgroundColor: '#00BDD6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    width: 128,
    height: 26,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 26,
    color: '#FFFFFF',
    textAlign: 'center'
  }
};

export default MyApp;