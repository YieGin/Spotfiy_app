import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Search_Top() {
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: '#fff',
          fontWeight: 700,
          paddingBottom: 10,
        }}>
        Search
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder="Artists, songs, or podcasts"
          style={{
            backgroundColor: '#fff',
            height: 40,
            borderRadius: 3,
            paddingLeft: 30,
            color: '#000',
            width: '100%',
          }}
        />
        <View style={{position: 'absolute', left: 5}}>
          <AntDesign name="search1" color={'rgb(107 114 128)'} size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
