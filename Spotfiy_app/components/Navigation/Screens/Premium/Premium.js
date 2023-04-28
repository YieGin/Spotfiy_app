import {
  ImageBackground,
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Subscribe from './Subscribe';
import Subscribe_Text from './Subscribe_Text';
import Lottie from 'lottie-react-native';

const {width, height} = Dimensions.get('screen');
export default function Premium() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  return (
    <>
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
        style={{backgroundColor: 'rgba(0,0,0,0.9)', flex: 1}}>
        <AnimatedImageBackground
          resizeMode="cover"
          source={require('../../../../assets/Images/Premium.jpg')}
          style={styles.banner(scrollY)}>
          <View
            style={{
              marginTop: 10,
              marginLeft: 25,
            }}>
            <Lottie
              style={{width: 80, height: 80}}
              source={require('../../../../assets/Loading/102098-music-green-player-spotify.json')}
              autoPlay
            />
          </View>
        </AnimatedImageBackground>
        <View style={{backgroundColor: '#000'}}>
          <View style={{paddingLeft: 5, paddingRight: 5}}>
            <Text
              style={{
                color: 'rgb(228 228 231)',
                paddingTop: 10,
                fontWeight: 500,
                fontSize: 12,
              }}>
              ESSAL GRATUIT
            </Text>
            <Text
              numberOfLines={2}
              style={{fontSize: 34, color: '#fff', fontWeight: 700}}>
              Essayez Spotify Premium gratuitement pendant 133
            </Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  width: '100%',
                  height: 40,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#000', fontWeight: 700}}>
                  PASSER A PREMIUM
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: 'rgb(228 228 231)',
                marginTop: 10,
                fontSize: 13,
                fontWeight: 500,
                textAlign: 'justify',
              }}>
              Seulement USD 4.99/mois ensuite. Réservé aux utilisateurs n'ayant
              jamais utilisé Premium. soumise a conditions.
            </Text>
          </View>
          <Subscribe />
          <Subscribe_Text />
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: scrollA => ({
    height: 300,
    width,
    transform: [
      {
        translateY: scrollA,
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-300, 0, 400, 400 + 1],
          outputRange: [2, 1.3, 0.75, 0.75],
        }),
      },
    ],
  }),
});
