// import { View, Text, StyleSheet,TextInput,Image,FlatList,Pressable } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useNavigation,useFocusEffect } from '@react-navigation/native';
// import search from '../assets/Search--Streamline-Bootstrap.png';
// import check from '../assets/check-removebg-preview.png'
// import nocheck from '../assets/nocheck-removebg-preview.png'
// import edit from '../assets/edit-removebg-preview.png'
// import dlt from '../assets/Trash--Streamline-Bootstrap.png'
// import add from '../assets/add-removebg-preview.png'
// const MyApp = () => {
//   const [data,setData]=useState([]);
//   // useEffect(()=>{
//   //   fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07')
//   //   .then(response=>response.json())
//   //   .then(json=>setData(json))
//   //   .catch(error => console.error(error));
//   // }, []);
//   const fetchData = () => {
//     fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       fetchData();
//     }, [])
//   );
//   const toggleCheck = (id) => {
//     setData(prevData =>
//       prevData.map(item =>
//         item.id === id ? { ...item, checked: !item.checked } : item
//       )
//     );
//   };
  
// const deleteItem = (id) => {
//     fetch(`https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07/${id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         setData(prevData => prevData.filter(item => item.id !== id));
//       })
//       .catch(error => console.error(error));
//   };

//  const autorenderlist = ({ item }) => {
//     return (
//       <View style={{
//         width: 300,
//         height: 48,
//         backgroundColor:' rgba(222, 225, 230, 0.47)',
//         borderRadius:24,
//         marginBottom:5,
//       }}>

//      <View style={{
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         width: 335,
//         height: 48,
//         borderRadius:5,
//         textAlign:'center',

//       }}
//       >
//       <Pressable onPress={() => toggleCheck(item.id)}>
//       <Image style={{width:24,height:24}}  source={item.checked ? nocheck : check}/>
//       </Pressable>
//       <Text style={{
//         width: 180,
//         height: 26,
//         fontFamily:'Inter',
//         fontStyle:'normal',
//         fontWeight:'700',
//         fontSize:16,
//         lineHeight:26,
//         color:"#171A1F",
//       }}
//       >{item.des}</Text>
//       <Pressable > 
//       <Image style={{width:24,height:24,marginRight:5}} source={edit}/>
//       </Pressable>
//       <Pressable onPress={() => deleteItem(item.id)} > 
//       <Image style={{width:24,height:24,marginRight:10}} source={dlt}/>
//       </Pressable>
//       </View>
    
//     </View>
     
//     );
//   };
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={{
//           flexDirection:'row',
//           width:'100%',
//           height:43,
//           justifyContent:'center',
//           alignItems:'center',
//           borderColor:'grey',
//           borderStyle:'solid',
//           borderWidth:2,
//           borderRadius:10,
//         }}
//         >
//           <Image source={search} style={{
//             marginLeft:10,
//           }}
//           />
//           <TextInput style={{
//             marginLeft:10,
//             width:'100%',
//             height:43,
//           }}
//            placeholder='Search'/>
//         </View>
//         <FlatList style={{
//           flex:1.6,
//           marginTop:5,
//         }}
//         data={data}
//         renderItem={autorenderlist}
//         keyExtractor={item => item.id}
//         />
//         <Pressable style={{flex:1}} onPress={()=>navigation.navigate('index3')} >
//           <Image style={{width:69,height:69}} source={add}/>
//         </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default MyApp;
import { View, Text, StyleSheet, TextInput, Image, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import search from '../assets/Search--Streamline-Bootstrap.png';
import check from '../assets/check-removebg-preview.png';
import nocheck from '../assets/nocheck-removebg-preview.png';
import edit from '../assets/edit-removebg-preview.png';
import dlt from '../assets/Trash--Streamline-Bootstrap.png';
import add from '../assets/add-removebg-preview.png';

const MyApp = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://6707b92b8e86a8d9e42ca7b4.mockapi.io/lab07')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

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

  const autorenderlist = ({ item }) => {
    return (
      <View style={{
        width: 300,
        height: 48,
        backgroundColor: 'rgba(222, 225, 230, 0.47)',
        borderRadius: 24,
        marginBottom: 5,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 335,
          height: 48,
          borderRadius: 5,
          textAlign: 'center',
        }}>
          <Pressable onPress={() => toggleCheck(item.id)}>
            <Image style={{ width: 24, height: 24 }} source={item.checked ? nocheck : check} />
          </Pressable>
          <Text style={{
            width: 180,
            height: 26,
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 26,
            color: "#171A1F",
          }}>{item.des}</Text>
          <Pressable onPress={() => navigation.navigate('index3', { item })}>
            <Image style={{ width: 24, height: 24, marginRight: 5 }} source={edit} />
          </Pressable>
          <Pressable onPress={() => deleteItem(item.id)}>
            <Image style={{ width: 24, height: 24, marginRight: 10 }} source={dlt} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        width: '100%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
      }}>
        <Image source={search} style={{ marginLeft: 10 }} />
        <TextInput style={{ marginLeft: 10, width: '100%', height: 43 }} placeholder='Search' />
      </View>
      <FlatList style={{ flex: 1.6, marginTop: 5 }} data={data} renderItem={autorenderlist} keyExtractor={item => item.id} />
      <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate('index3')}>
        <Image style={{ width: 69, height: 69 }} source={add} />
      </Pressable>
    </View>
  );
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