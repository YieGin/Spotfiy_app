import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

export default function Switch({Card}) {
  const [isActive, setIsActive] = useState(false);
  const colors = {
    active: '#1db954',
    inactive: '#666666',
  };
  const colorsSwitch = {
    active: '#1db954',
    inactive: '#d6d1cd',
  };
  return (
    <View>
      {Array.isArray(Card) &&
        Card.map((item, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                {item[0]}
              </Text>
              <Text
                style={{
                  color: 'rgb(214 211 209)',
                  fontWeight: 400,
                  width: 300,
                }}>
                {item[1]}
              </Text>
            </View>
            <Pressable
              style={{marginLeft: 'auto'}}
              onPress={() => setIsActive(!isActive)}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <MotiView
                  transition={{
                    type: 'timing',
                    duration: 300,
                    easing: Easing.inOut(Easing.ease),
                  }}
                  animate={{
                    backgroundColor: isActive ? colors.active : colors.inactive,
                  }}
                  style={{
                    position: 'absolute',
                    width: 15 * 1.5,
                    height: 25 * 0.4,
                    borderRadius: 60 * 0.4,
                    backgroundColor: colors.active,
                  }}
                />
                <MotiView
                  transition={{
                    type: 'timing',
                    duration: 300,
                    easing: Easing.inOut(Easing.ease),
                  }}
                  animate={{
                    translateX: isActive ? (15 * 1.5) / 4 : (-15 * 1.5) / 4,
                  }}
                  style={{
                    width: 17,
                    height: 17,
                    borderRadius: 100,
                    backgroundColor: isActive
                      ? colorsSwitch.active
                      : colorsSwitch.inactive,
                  }}></MotiView>
              </View>
            </Pressable>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({});
