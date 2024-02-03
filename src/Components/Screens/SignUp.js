import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UserSvg from '../../Assets/SVG/user.svg';
import LockSvg from '../../Assets/SVG/lock.svg';
import EyeSvg from '../../Assets/SVG/eye.svg';
import LogoSvg from '../../Assets/SVG/logo.svg';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import Button from '../Common/Button';

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <LogoSvg />
                <Text style={styles.logoname}>Kapslog</Text>
            </View>
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Sign up</Text>
                <Text style={styles.loginbottomtext}>Enter your details below</Text>
            </View>

            <View style={styles.backcontainer}>
                <Text style={styles.username}>Username</Text>

                <View style={styles.inputContainer}>
                    <UserSvg
                        style={styles.userIcon}
                    />
                    <TextInput style={styles.userInput} placeholder='Enter your username' placeholderTextColor={Color.black400}></TextInput>
                </View>

                <Text style={styles.passwordTxt}>Password</Text>
                <View style={styles.inputContainer}>
                    <LockSvg
                        style={styles.userIcon}
                    />
                    <TextInput style={styles.userInput} placeholder='Enter your Password' placeholderTextColor={Color.black400}></TextInput>
                    <EyeSvg
                        style={styles.eyeIcon}
                    />
                </View>
                <Text style={styles.passwordTxt}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                    <LockSvg
                        style={styles.userIcon}
                    />
                    <TextInput style={styles.userInput} placeholder='Enter Confirm Password' placeholderTextColor={Color.black400}></TextInput>
                    <EyeSvg
                        style={styles.eyeIcon}
                    />
                </View>
                <Pressable   onPress={() => navigation.navigate("ConfirmYourPassword")} >
            <LinearGradient
               style={[styles.btnHome]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>Sign Up</Text>
            </LinearGradient>
      </Pressable>
            </View>
            <View style={styles.dontAcc}>
                <Text style={styles.dontAccText}>Don’t have an account?</Text>
                <Text style={styles.signIN}>Sign Up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.primarybg,
    },
    imageContainer: {
        width: responsiveScreenWidth(60),
        height: 150,
        flexDirection: 'row',
        paddingTop: 30,
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
    logincontainer: {
        width: 335,
        top: -40,
        paddingLeft: 20,
    },
    logoname: {
        width: 400,
        height: 29,
        fontFamily: FontFamily.gilroy,
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 29,
        top: 20,
        letterSpacing: -0.02,
        textAlign: 'left',
        left: -10,
        color: Color.gray9,


    },
    loginText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 38.69,
        letterSpacing: -0.02,
        textAlign: 'left',
        color: Color.gray9,


    },
    loginbottomtext: {
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight: 16.48,
        color: Color.black400,
        paddingTop: 4,
    },
    backcontainer: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(41.5),
        backgroundColor: Color.primaryWhite,
        alignSelf: 'center',
        borderRadius: 30,
        top: -10,
        flexDirection: 'column',
    },
    username: {
        paddingLeft: 24,
        paddingTop: 24,
        color: Color.black800,
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '600',
        lineHeight: 18,
        letterSpacing: -0.01,
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
    userIcon: {
        top: 12,
        left: 19,
    },
    userInput: {
        borderColor: 'gray',
        width: "78%",
        height: 50,
        alignSelf: 'center',
        paddingLeft: 30,
    },
    eyeIcon: {
        top: 11,
        right: -6
    },
    passwordTxt: {
        paddingTop: 12,
        color: Color.black800,
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '600',
        lineHeight: 18,
        letterSpacing: -0.01,
        paddingLeft: 24,

    },
    dontAcc: {
        marginTop: responsiveHeight(24),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dontAccText: {
        fontFamily: FontFamily.gilroy,
        lineHeight: 16.48,
        fontWeight: '500',
        fontSize: FontSize.size_14,
        color: Color.black400,
        right: 8
    }, signIN: {
        fontFamily: FontFamily.gilroy,
        lineHeight: 16.48,
        fontWeight: '600',
        fontSize: FontSize.size_14,
        color: Color.black800,
    },
});

export default SignUp;


