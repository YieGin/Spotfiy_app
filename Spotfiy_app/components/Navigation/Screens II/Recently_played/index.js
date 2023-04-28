import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Recently_Text from './Recently_Text';

export default function Recently_played({navigation, updates}) {
  const cart = useSelector(state => state.cart);
  const totalPrice = cart.reduce((a, p) => {
    return a + p.quantity;
  }, 0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgb(38 38 38)',
          alignItems: 'center',
          height: 40,
        }}>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" color={'#fff'} size={26} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
            textAlign: 'center',
            width: '85%',
          }}>
          Recently played
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
          rowGap: 20,
        }}>
        <Text style={{color: '#fff', fontWeight: 500, fontSize: 20}}>
          You have played ({totalPrice}) songs
        </Text>
        <Text style={{color: '#fff', fontWeight: 500, fontSize: 20}}>
          Here you'll find all your listening history
        </Text>
      </View>
      <Recently_Text cart={cart} />
    </View>
  );
}
