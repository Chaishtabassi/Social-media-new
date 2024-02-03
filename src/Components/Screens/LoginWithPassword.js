import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Pressable } from 'react-native';
import ArrowSvg from '../../Assets/SVG/arrow-left.svg'
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Button from '../Common/Button';
import LockSvg from '../../Assets/SVG/lock.svg';
import EyeSvg from '../../Assets/SVG/eye.svg';
import LinearGradient from 'react-native-linear-gradient';


const LoginWithPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ArrowSvg
                style={styles.Imagebg}
            />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Forget Password</Text>
                <Text style={styles.loginbottomtext}>Enter your details below</Text>
            </View>

            <View style={styles.backcontainer}>
                <Text style={styles.username}>Password</Text>
                <View style={styles.inputContainer}>
                    <LockSvg
                        style={styles.userIcon}
                    />
                    <TextInput style={styles.userInput} placeholder='Enter your Password' placeholderTextColor={Color.black400}></TextInput>
                    <EyeSvg
                        style={styles.eyeIcon}
                    />
                </View>
                <Text style={styles.confirmPassword}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                    <LockSvg
                        style={styles.userIcon}
                    />
                    <TextInput style={styles.userInput} placeholder='Enter your Confirm Password' placeholderTextColor={Color.black400}></TextInput>
                    <EyeSvg
                        style={styles.eyeIcon}
                    />
                </View>
                <Pressable   onPress={() => navigation.navigate("LoginWithUsername")} >
            <LinearGradient
               style={[styles.btnHome]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>Create Password</Text>
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
        backgroundColor: '#e5dbff',
    },

    Imagebg: {
        marginLeft: 20,
        width: 500,
        height: 150,
        flexDirection: 'row',
        marginTop: 30,
    },
    logincontainer: {
        paddingTop: 46,
    },

    loginText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 38.69,
        paddingLeft: 20,
        letterSpacing: -0.02,
        textAlign: 'left',
        color: Color.gray9,
    },
    loginbottomtext: {
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '500',
        paddingLeft: 20,
        lineHeight: 16.48,
        paddingTop: 4,
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
    backcontainer: {
        marginTop: 24,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(32.4),
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
        top: 11,
        marginLeft: 18,
    },

    userInput: {
        borderColor: 'gray',
        width: "74%",
        height: 50,
        alignSelf: 'center',
        paddingLeft: 8,
    },
    eyeIcon: {
        top: 11,
        left: 5
    },
    confirmPassword: {
        paddingLeft: 24,
        paddingTop: 20,
        color: Color.black800,
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '600',
        lineHeight: 18,
        letterSpacing: -0.01,
    },
    dontAcc: {
        marginTop: responsiveHeight(37),
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

export default LoginWithPassword;


