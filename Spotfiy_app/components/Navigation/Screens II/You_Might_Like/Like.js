import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Like({trip}) {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: 20,
        paddingBottom: 20,
      }}>
      <View>
        <Image
          resizeMode="cover"
          source={trip.img2}
          style={{height: 150, width: 180}}
        />
        <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
          {trip.img2Text}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 5,
            width: 170,
          }}>
          {trip.img2Details}
        </Text>
      </View>
      <View>
        <Image
          resizeMode="cover"
          source={trip.img3}
          style={{height: 150, width: 180}}
        />
        <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
          {trip.img3Text}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 5,
            width: 170,
          }}>
          {trip.img3Details}
        </Text>
      </View>
      <View>
        <Image
          resizeMode="cover"
          source={trip.img4}
          style={{height: 150, width: 180}}
        />
        <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
          {trip.img4Text}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 5,
            width: 170,
          }}>
          {trip.img4Details}
        </Text>
      </View>
      <View>
        <Image
          resizeMode="cover"
          source={trip.img5}
          style={{height: 150, width: 180}}
        />
        <Text style={{color: '#fff', textAlign: 'center', marginTop: 5}}>
          {trip.img5Text}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 5,
            width: 170,
          }}>
          {trip.img5Details}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
