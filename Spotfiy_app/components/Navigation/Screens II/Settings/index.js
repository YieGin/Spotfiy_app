import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Account_Details from './Account/Account_Details';
import {ScrollView} from 'react-native-gesture-handler';

export default function Settings({navigation}) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'rgb(38 38 38)',
          height: 50,
          flexDirection: 'row',
          columnGap: 125,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{paddingLeft: 10}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" color={'#fff'} size={26} />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontWeight: 700}}>Settings</Text>
      </View>
      <ScrollView>
        <Text
          style={{
            color: '#fff',
            fontWeight: 900,
            textAlign: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            fontSize: 16,
          }}>
          Free Account
        </Text>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: 150,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <Text style={{color: '#000', fontWeight: 600}}>Go Premium</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 20,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(74 222 128)',
              width: 50,
              height: 50,
              borderRadius: 50,
            }}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 600}}>
              M
            </Text>
          </View>
          <View>
            <Text style={{color: '#fff', fontWeight: 900, fontSize: 20}}>
              Mook
            </Text>
            <Text style={{color: '#fff', fontWeight: 400, fontSize: 13}}>
              View Profile
            </Text>
          </View>
          <View style={{marginLeft: 'auto', justifyContent: 'center'}}>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'rgb(214 211 209)'}
              size={15}
            />
          </View>
        </View>
        <Account_Details />
      </ScrollView>
    </View>
  );
}
