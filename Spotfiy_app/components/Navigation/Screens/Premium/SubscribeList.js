import {Text, View} from 'react-native';
import React from 'react';

export default function SubscribeList({Card}) {
  return (
    <View
      style={{
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {Card &&
        Card.map((Item, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: 'rgb(21 128 61)',
                paddingBottom: 5,
                paddingTop: 30,
                paddingLeft: 20,
                paddingRight: 20,
                width: '95%',
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 15, color: '#fff', fontWeight: 900}}>
                  {Item[0]}
                </Text>
                <View style={{marginLeft: 'auto', flexDirection: 'column'}}>
                  <Text style={{fontSize: 20, color: '#fff', fontWeight: 900}}>
                    {Item[1]}
                  </Text>
                  <Text
                    style={{
                      color: 'rgb(212 212 212)',
                      fontSize: 13,
                      fontWeight: 600,
                    }}>
                    {Item[2]}
                  </Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 700,
                    color: '#fff',
                    marginTop: 20,
                    width: 250,
                    lineHeight: 17,
                  }}>
                  {Item[3]}
                </Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 20,
                      width: 250,
                      height: 40,
                      marginTop: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#000', fontWeight: 700}}>
                      {Item[4]}
                    </Text>
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 700,
                      color: '#fff',
                      marginTop: 20,
                      width: 310,
                      lineHeight: 17,
                      fontSize: 11,
                    }}>
                    {Item[5]}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );
}
