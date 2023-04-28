import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Switch from './Switch';

export default function SwitchList() {
  const LandingCard = [
    [
      'Audio Quality',
      'Sets your audio quality to low(equivalent to 24kbit/s) and disables artist canvases.',
    ],
  ];
  const LandingCard2 = [
    ['Download audio only', 'Save video podcasts as audio only.'],
  ];
  const LandingCard3 = [
    [
      'Stream audio only',
      'Play video podcasts as audio only when not on WiFi.',
    ],
  ];
  const LandingCard4 = [['Gapless', 'Allows gapless playback']];
  const LandingCard5 = [
    ['Automix', 'Allow smooth trasitions between songs in a playlist.'],
  ];
  const LandingCard6 = [
    [
      'Allow Explicit Content',
      'Turn on to play explicit content Explicit content is labeled with E tag',
    ],
  ];
  const LandingCard7 = [
    ['Show unplayble songs', 'Show songs that are unplayable.'],
  ];
  const LandingCard8 = [
    ['Normalize volume', 'Set the same volume level for all tracks'],
  ];
  const LandingCard9 = [
    ['Mono Audio', 'Makes the left and right speakers play the same audio.'],
  ];
  const LandingCard10 = [
    [
      'Device Broadcast Status',
      'Allow other apps on your device to see what you are listening to.',
    ],
  ];
  const LandingCard11 = [
    ['Autoplay', 'Keep on listening to smiliar tracks when your music ends.'],
  ];
  return (
    <View>
      <Switch Card={LandingCard} />
      <Switch Card={LandingCard2} />
      <Switch Card={LandingCard3} />
      <Switch Card={LandingCard4} />
      <Switch Card={LandingCard5} />
      <Switch Card={LandingCard6} />
      <Switch Card={LandingCard7} />
      <Switch Card={LandingCard8} />
      <Switch Card={LandingCard9} />
      <Switch Card={LandingCard10} />
    </View>
  );
}

const styles = StyleSheet.create({});
