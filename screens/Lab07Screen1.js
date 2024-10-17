import {Text,Image,Pressable,View,TextInput} from 'react-native';
import notebook from '../assets/Note.png';
import mail from '../assets/Mail-Line--Streamline-Majesticons.png'
import { useNavigation } from '@react-navigation/native';
const styles ={
  button:{
    width:190,
    height:44,
    backgroundColor:'#00BDD6',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  },
  textButton:{
    width:128,
    height:26,
    fontFamily:'Inter',
    fontStyle:'normal',
    fontWeight:400,
    fontSize:16,
    lineHeight:26,
    color:'#FFFFFF',
    textAlign:'center'
  }
}
const  MyApp=()=>{
    const navigation = useNavigation();
      return(
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white'
        }}
        >
        <View style={{
          flex:4,
          backgroundColor:'white',
          width:'100%',
          justifyContent:"center",
          alignItems:"center",
        }}
        >
        <View  style={{
          width:271,
          height:271,
          backgroundColor:"white",
          justifyContent:"center",
          alignItems:"center",
        }}
        >
          <Image source={notebook}
          style={{
            width:243,
            height:243,
          }}
          /> </View>
        </View>
        <View style={{
          flex:1,
          width:'100%',
          height:72,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Text style={{
          width:'100%',
          height: 72,
          fontFamily:'Epilogue',
          fontStyle:'normal',
          fontWeight:700,
          fontSize:24,
          lineHeight:36,
          color:"#8353E2",
          textAlign:'center',
          paddingTop:18,

        }}
        >
        MANAGE YOUR TASK
        </Text>
        </View>
        <View style={{
          flex:1,
          backgroundColor:'withe',
         width:'100%',
         alignItems:'center',
         justifyContent:'center'
        }}
        >
        <View style={{
            flexDirection:'row',
         width:'100%',
          height:43,
          justifyContent:'center',
          alignItems:'center',
          borderColor:'grey',
          borderStyle:'solid',
          borderWidth:2,
          borderRadius:10,
        }}
        >
          <Image source={mail} style={{
            marginLeft:10,
          }}
          />
          <TextInput style={{
            marginLeft:10,
            width:'100%',
            height:43,
          }}
           placeholder='Enter Your Name'/>
        </View>
        </View>
        <View style={{
          flex:1,
          marginTop:15,
        }}
        >
          <Pressable style={styles.button} onPress={()=>navigation.navigate('index2')}>
          <Text style={styles.textButton}>GET STARTED -></Text>
          </Pressable>
        </View>
        
        
        </View>
      );
};
export default MyApp;