import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Notification({navigation}) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{paddingTop: 10}}>
        <Ionicons name="arrow-back" color={'#fff'} size={26} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 28,
          color: '#fff',
          fontWeight: 800,
          paddingTop: 20,
          paddingBottom: 30,
        }}>
        What's New
      </Text>
      <View style={{flexDirection: 'row', columnGap: 10}}>
        <View
          style={{
            borderColor: 'rgb(163 163 163)',
            borderWidth: 1,
            width: 70,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 800}}>Music</Text>
        </View>
        <View
          style={{
            borderColor: 'rgb(163 163 163)',
            borderWidth: 1,
            width: 150,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 800}}>Podcasts & Shows</Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 23,
            color: '#fff',
            fontWeight: 900,
            textAlign: 'center',
          }}>
          We don't have any updates for you yet
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'rgb(212 212 212)',
            fontWeight: 400,
            width: 300,
            textAlign: 'center',
            marginTop: 20,
          }}>
          When ther's news, we'll post it here. Follow Your favorite artists and
          podcasts to stay updated on them too.
        </Text>
      </View>
    </View>
  );
}
