import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Storage() {
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        Storage
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'rgb(2 132 199)',
            height: 8,
            width: '89%',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
          }}></View>
        <View
          style={{
            backgroundColor: 'white',
            height: 8,
            width: '1%',
          }}></View>
        <View
          style={{
            backgroundColor: 'rgb(63 63 70)',
            height: 8,
            width: '10%',
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          columnGap: 5,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'rgb(2 132 199)',
            borderRadius: 100,
          }}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 120}}>
          Other apps
        </Text>
        <Text style={{color: '#fff', fontWeight: 700}}>45.2 GB</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          columnGap: 5,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'rgb(34 197 94)',
            borderRadius: 100,
          }}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 120}}>
          Downloads
        </Text>
        <Text style={{color: '#fff', fontWeight: 700}}>4.0 MB</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          columnGap: 5,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'rgb(107 114 128)',
            borderRadius: 100,
          }}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 120}}>Cache</Text>
        <Text style={{color: '#fff', fontWeight: 700}}>687.0 MB</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          columnGap: 5,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'rgb(63 63 70)',
            borderRadius: 100,
          }}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 120}}>Free</Text>
        <Text style={{color: '#fff', fontWeight: 700}}>3.1 GB</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
