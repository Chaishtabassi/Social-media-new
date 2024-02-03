import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View,Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveWidth, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import EyeSvg from '../../Assets/SVG/eye.svg';
import Header from '../Common/Header';
import Button from '../Common/Button';

const ConfirmYourPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.backcontainer}>
      <ImageBackground source={require('../../Assets/Images/Image1.png')} style={styles.image} />
     

        <Text style={styles.confirmPasswordHeadingText}>
          {'Confirm your Password'}
        </Text>

        <Text style={styles.confirmPasswordDescriptionText}>
          {'Before continuing we need you to confirm your password'}
        </Text>
        <View style={styles.inputContainer}>

          <TextInput style={styles.userInput} placeholder='Enter Confirm Password' placeholderTextColor={Color.black400}></TextInput>
          <EyeSvg
            style={styles.eyeIcon}
          />
        </View>


        <Pressable   onPress={() => navigation.navigate("SecureYourWallet")} >
            <LinearGradient
               style={[styles.btnHome]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>Confirm</Text>
            </LinearGradient>
      </Pressable>

       {/* <Button buttonStyles={{marginTop:370}} buttonText={"Confirm"}/> */}
      </View>
    </View>
  );
};

export default ConfirmYourPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primarybg,
  },
 
  backcontainer: {
    marginTop: 24,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(23),
    backgroundColor: Color.primaryWhite,
    alignSelf: 'center',
    borderRadius: 30,
    top: -10,
    flexDirection: 'column',
  },
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
  userInput: {
    borderColor: 'gray',
    width: "88%",
    height: 50,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  eyeIcon: {
    top: 11,
    right:-3
  },

  confirmPasswordHeadingText: {
    color: Color.black700,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 24,
    width: 250,
    alignSelf: "center",
    lineHeight: 29.02,
    fontFamily: FontFamily.gilroy,

  },

  confirmPasswordDescriptionText: {
    color: Color.black400,
    textAlign: 'center',
    fontSize: FontSize.size_14,
    fontWeight: '500',
    marginTop: 8,
    width: "76%",
    alignSelf: "center",
    lineHeight: 16.48,
    fontFamily: FontFamily.gilroy,
  },
  inputContainer: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: Color.black800,
    borderRadius: 62,
    height: 48,
    width: "88%",
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: '#E8E8E8',
  },

  bottomButtonsContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 15,
  },
  confirmButton: {
    backgroundColor: '#7B4AFF',
    alignSelf: 'center',
  },
  
});