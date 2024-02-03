import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Color, FontFamily } from '../../Styles/Colors';

const Button = ({ buttonText, buttonStyles }) => {
   return (
      <Pressable>
            <LinearGradient
               style={[styles.btnHome, buttonStyles]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>{buttonText}</Text>
            </LinearGradient>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   btnHome: {
      width: '88%',
      height: 52,
      top: 20,
      alignSelf: 'center',
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
   },
   loginBtnText: {
      fontFamily: FontFamily.gilroy,
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
      letterSpacing: -0.5,
      height: 60,
      paddingTop: 16,
      color: Color.primaryWhite,
      textAlign:'center'
   },
});

export default Button;

