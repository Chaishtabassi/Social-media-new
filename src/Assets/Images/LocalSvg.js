import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Circle, Path, Defs, Filter, Stop, LinearGradient, ClipPath } from 'react-native-svg';

const LogoSvg = () => {
  return (
    <View>
      <Svg width="97" height="111" viewBox="0 0 97 111" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G filter="url(#filter0_dddddii_465_806)">
          <G clip-path="url(#clip0_465_806)">
            <Rect x="20" y="13" width="48" height="48" rx="11.25" fill="url(#paint0_linear_465_806)" />
            <G style="mix-blend-mode:plus-lighter" opacity="0.4" filter="url(#filter1_f_465_806)">
              <Circle cx="44" cy="13.5625" r="9.1875" fill="white" />
            </G>
            <Rect x="31.625" y="25.375" width="1.875" height="23.25" rx="0.9375" fill="white" />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.5178 25.375C47.6141 25.375 45.8923 26.15 44.6542 27.3999C44.6542 27.4 44.6541 27.4 44.6541 27.3999C44.654 27.3999 44.654 27.3999 44.6539 27.3999L35.3342 36.6676C35.1499 36.8509 35.1499 37.1491 35.3342 37.3324L44.6539 46.6001C44.654 46.6001 44.654 46.6001 44.6541 46.6001C44.6541 46.6 44.6542 46.6 44.6542 46.6001C45.8923 47.85 47.6141 48.625 49.5178 48.625C53.2879 48.625 56.3442 45.5858 56.3442 41.8367C56.3442 39.9435 55.5649 38.2314 54.3079 37.0002C54.3079 37.0002 54.3079 37.0001 54.3079 37.0001C54.308 37 54.308 37 54.3079 36.9999C54.3079 36.9999 54.3079 36.9998 54.3079 36.9998C55.5649 35.7686 56.3442 34.0565 56.3442 32.1633C56.3442 28.4142 53.2879 25.375 49.5178 25.375Z"
              fill="white"
            />
            <G opacity="0.510533" filter="url(#filter2_f_465_806)">
              <Path
                d="M45.7404 20.1022L46.241 19.5224L45.8649 18.8551L46.4447 19.3557L47.112 18.9797L46.6113 19.5594L46.9874 20.2267L46.4077 19.7261L45.7404 20.1022Z"
                fill="white"
              />
            </G>
            {/* ... Other shapes with opacity and filters ... */}
          </G>
          <Rect x="20.0938" y="13.0938" width="47.8125" height="47.8125" rx="11.1562" stroke="url(#paint1_linear_465_806)" stroke-opacity="0.1" stroke-width="0.1875" />
          <Rect x="20.0938" y="13.0938" width="47.8125" height="47.8125" rx="11.1562" stroke="url(#paint2_linear_465_806)" stroke-opacity="0.1" stroke-width="0.1875" />
        </G>
        {/* ... Definitions for gradients, filters, etc. ... */}
      </Svg>
    </View>
  );
};

export default LogoSvg;
