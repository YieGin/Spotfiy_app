import {Image, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import All_Episodes from './All_episodes/All_Episodes';

export default function Episodes_List({trip}) {
  return (
    <View>
      <Text style={{fontWeight: 600, color: 'rgb(161 161 170)'}}>
        {trip.Details}
      </Text>
      <View
        style={{
          backgroundColor: 'rgb(39 39 42)',
          paddingRight: 10,
          paddingLeft: 5,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Image
          resizeMode="cover"
          source={trip.img}
          style={{width: 60, height: 60, borderRadius: 5}}
        />
        <View>
          <Text
            numberOfLines={2}
            style={{color: '#fff', fontWeight: 700, width: 250}}>
            {trip.ListName1}
          </Text>
          <Text style={{color: 'rgb(113 113 122)', fontWeight: 700}}>
            {trip.Timer}
          </Text>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Entypo
            name="dots-three-vertical"
            color={'rgb(113 113 122)'}
            size={20}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#fff', fontWeight: 700, fontSize: 20}}>
          All episodes
        </Text>
        <View
          style={{
            backgroundColor: 'rgb(63 63 70)',
            width: 60,
            height: 30,
            marginLeft: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
          }}>
          <Text style={{fontWeight: 700, color: 'rgb(161 161 170)'}}>Sort</Text>
        </View>
      </View>
      <All_Episodes trip={trip} />
    </View>
  );
}
