import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Bottom_Tabs from '../Bottom-Tabs-Navigator/Bottom_Tabs';
import Details from '../Screens II/Details';
import Episodes_Details from '../Screens II/Episodes_Details';
import Notification from '../Screens II/Notification';
import Recently_played from '../Screens II/Recently_played';
import Settings from '../Screens II/Settings';
import Lottie from 'lottie-react-native';

const Stack = createStackNavigator();

export default function Main_Navigation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2650);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <Lottie
          style={{width: 400, height: 300}}
          source={require('../../../assets/Loading/75039-spotify-button-flat-3d.json')}
          autoPlay
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom_Tabs" component={Bottom_Tabs} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Episodes_Details" component={Episodes_Details} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Recently_played" component={Recently_played} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
