import {Image, FlatList, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Recently_Text({cart}) {
  return (
    <FlatList
      keyExtractor={(item, id) => id.toString()}
      data={cart}
      renderItem={({item}) => (
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            resizeMode="cover"
            source={item.img}
            style={{width: 70, height: 70, borderRadius: 2}}
          />
          <View>
            <Text
              style={{
                color: 'rgb(74 222 128)',
                fontSize: 20,
                marginLeft: 10,
                fontWeight: 900,
                marginBottom: 5,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                marginLeft: 10,
                width: 250,
              }}
              numberOfLines={2}>
              {item.Preview}
            </Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Entypo
              name="dots-three-vertical"
              color={'rgb(168 162 158)'}
              size={20}
            />
          </View>
        </View>
      )}
    />
  );
}
