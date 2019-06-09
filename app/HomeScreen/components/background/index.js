import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const PARALLAX_HEADER_HEIGHT = 350;

const window = Dimensions.get('window');

export const BackGround = () => (
  <View key="background">
    <Image source={{uri: 'https://d2gn4xht817m0g.cloudfront.net/p/platform/story_thumbnails/images/giant/000/001/753/1753-a1ebfa4f573648d199e534628977a50bf29ea2ec.?1559665756',
      width: window.width,
      height: PARALLAX_HEADER_HEIGHT}}
    />
  </View>
);