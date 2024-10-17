import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import arrow from './assets/Arrow-Left--Streamline-Carbon.png';
import 'react-native-gesture-handler';
import avata from './assets/Avata.png';
import { TextInput } from 'react-native-gesture-handler';
import Lab07Screen1 from './screens/Lab07Screen1';
import Lab07Screen2 from './screens/Lab07Screen2';
import Lab07Screen3 from './screens/Lab07Screen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='index3'>
        <Stack.Screen
          name='index'
          component={Lab07Screen1}
          options={({ navigation }) => ({
            headerStyle: {
              width: "0",
              height: 0,
            },
          })}
        />
        <Stack.Screen
          name="index2"
          component={Lab07Screen2}
          options={({ navigation }) => ({
            headerStyle: {
              width: "100",
              height: 50,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={arrow}
                  style={{
                    width: 36,
                    height: 36,
                  }} />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View></View>
            ),
            headerRight: () => (
              <View style={{
                flexDirection: 'row'
              }}>
                <Image source={avata}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                />
                <View style={{
                  width: 168,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    width: 101,
                    height: 30,
                    fontFamily: 'Epilogue',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: 30,
                    textAlign: 'center',
                    color: '#171A1F'
                  }}
                  >Hi Twinkle</Text>
                  <Text style={{
                    width: 168,
                    height: 22,
                    fontFamily: 'Epilogue',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: 22,
                    textAlign: 'center',
                    color: '#171A1F',
                    opacity: 0.75
                  }}
                  >Have a great day ahead</Text>
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="index3"
          component={Lab07Screen3}
          options={({ navigation }) => ({
            headerStyle: {
              width: "100",
              height: 50,
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={arrow}
                  style={{
                    width: 36,
                    height: 36,
                  }} />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View></View>
            ),
            headerLeft: () => (
              <View style={{
                flexDirection: 'row'
              }}>
                <Image source={avata}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                />
                <View style={{
                  width: 168,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    width: 101,
                    height: 30,
                    fontFamily: 'Epilogue',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: 30,
                    textAlign: 'center',
                    color: '#171A1F'
                  }}
                  >Hi Twinkle</Text>
                  <Text style={{
                    width: 168,
                    height: 22,
                    fontFamily: 'Epilogue',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: 22,
                    textAlign: 'center',
                    color: '#171A1F',
                    opacity: 0.75
                  }}
                  >Have a great day ahead</Text>
                </View>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});