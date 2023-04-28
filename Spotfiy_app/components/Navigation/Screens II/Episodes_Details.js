import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Episodes_List from './Episodes_List/Episodes_List';

const {width, height} = Dimensions.get('screen');
export default function Episodes_Details({navigation, route}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {trip} = route.params;
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  return (
    <>
      <AnimatedTouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(24 24 27)',
          zIndex: 200,
          height: 50,
          justifyContent: 'center',
          top: 0,
          left: 0,
          right: 0,
          paddingLeft: 5,
          opacity: scrollY.interpolate({
            inputRange: [180, 200],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [10, 20],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="arrow-back" color={'#fff'} size={26} />
          <Text
            numberOfLines={1}
            style={{
              color: '#fff',
              textAlign: 'center',
              width: '85%',
              fontWeight: 900,
              fontSize: 13,
            }}>
            {trip.name}
          </Text>
        </View>
      </AnimatedTouchableOpacity>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        style={{
          flex: 1,
          backgroundColor: '#000',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'rgb(30 41 59)',
            marginTop: 10,
            width: 30,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 10,
          }}>
          <Ionicons name="arrow-back" color={'#fff'} size={26} />
        </TouchableOpacity>
        <View>
          <AnimatedImageBackground
            resizeMode="contain"
            source={trip.img}
            style={styles.banner(scrollY)}
          />
        </View>
        <View style={{backgroundColor: '#000'}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 700,
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: 20,
            }}>
            {trip.name}
          </Text>
          <View
            style={{flexDirection: 'row', columnGap: 20, paddingBottom: 10}}>
            <View
              style={{
                borderColor: 'rgb(156 163 175)',
                width: 60,
                height: 25,
                borderWidth: 1,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: 700}}>Follow</Text>
            </View>
            <Ionicons
              name="notifications-outline"
              color={'rgb(209 213 219)'}
              size={20}
            />
            <Ionicons
              name="settings-outline"
              color={'rgb(209 213 219)'}
              size={20}
            />
            <Entypo
              name="dots-three-vertical"
              color={'rgb(209 213 219)'}
              size={20}
            />
          </View>
          <Episodes_List trip={trip} />
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: scrollA => ({
    height: 200,
    width,
    transform: [
      {
        translateY: scrollA,
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-200, 0, 200, 200 + 1],
          outputRange: [2, 2, 0.75, 0.75],
        }),
      },
    ],
  }),
});
