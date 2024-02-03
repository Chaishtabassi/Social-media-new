import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
    responsiveHeight
} from "react-native-responsive-dimensions";
import BgPhoto1 from "../../Assets/SVG/BgPhoto1.svg"
import BgPhoto2 from "../../Assets/SVG/BgPhoto2.svg"
import BgPhoto3 from "../../Assets/SVG/BgPhoto3.svg"
import BgPhoto4 from "../../Assets/SVG/BgPhoto4.svg"
import Heart from "../../Assets/SVG/Heart.svg"
import Mail from "../../Assets/SVG/mail.svg"
import Share from "../../Assets/SVG/share.svg"
import Right from "../../Assets/SVG/right.svg"
import { Color, FontFamily } from '../../Styles/Colors';
import Button from '../Common/Button';




const GetStarted = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.picturesContainer}>
                <View style={styles.imageContainer}>
                    <View style={styles.image1BackGround}>
                        <BgPhoto2
                            style={styles.image1}
                        />

                        <BgPhoto1

                            style={styles.image2}
                        />
                        <Heart
                            style={styles.heart}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.imageBackGround}>
                        <BgPhoto3

                            style={styles.image3}
                        />

                        <BgPhoto4

                            style={styles.image4}
                        />
                        <Share
                            style={styles.share}
                        />
                        <Mail
                            style={styles.mail}
                        />
                        <Right
                            style={styles.right}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.contentContainer}>

                <Text
                    style={styles.welcomeText}>
                    {'Welcome Back'}
                </Text>

                <Text
                    style={styles.paragraphText}>
                    {'Orci nunc ullamcorper habitasse amet id odio tempus at varius.'}
                </Text>
                <Pressable

                    style={[styles.btnHome,]}
                    onPress={() => navigation.navigate("LoginWithUsername")} 
                >
                    <Text style={styles.loginBtnText}>Login</Text>

                </Pressable>
                <Pressable style={styles.dontAcc}
                 onPress={() => navigation.navigate("SignUp")} 
                >
                    <Text style={styles.dontAccText}>Don’t have an account?</Text>
                    <Text style={styles.signIN}>Sign Up</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container: {

        display: 'flex',
        flex: 1,

    },
    picturesContainer: { flexDirection: 'column', display: 'flex' },
    imageContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        height: '60%',
    },
    image1BackGround: {
        position: 'relative',
    },
    image2: {
        position: 'absolute',
        // top: 0,
        left: 0,
        top: 30,
        // zIndex:-10,
        zIndex: 1,
    },
    heart: {
        position: 'absolute',
        // bottom: 0,
        left: '42%', 
        transform: [{ translateX: 0 }, { translateY: 175 }],
        zIndex: 1,
    },
    image1: {
        position: 'absolute',
        // bottom: 0,
        right: 0,
        top: -15,
    },
    image3: {
        position: 'absolute',
        // top: 0,
        zIndex: -1,
        left: 0,
        height: 280,
        width: 280,
        top: -10,
    },
    image4: {
        position: 'absolute',
        // bottom: 0,
        right: 0,
        top: -94,
        zIndex: -1,
    },
    share: {
        position: 'absolute',
        // bottom: 0,
        left: '40%', 
        transform: [{ translateX: 0 }, { translateY: 0 }],
    },
    mail: {
        position: 'absolute',
        // bottom: 0,
        // left: '-2%', 
        transform: [{ translateX: 0 }, { translateY: 0 }],
        zIndex: 2,
    },
    right: {
        position: 'absolute',
        // bottom: 0,
        left: '62%',
        transform: [{ translateX: 0 }, { translateY: 130 }],
        zIndex: 2,

    },
    imageBackGround: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
    },
    contentContainer: {
        marginTop: 80,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 12,
        borderRadius: 30,
        padding: 24,
    },
    welcomeText: {
        textAlign: 'center',
        color: Color.black800,
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 36.27,

    },
    paragraphText: {
        textAlign: 'center',
        color: "#555555",
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.48,
        marginTop: 4,
        width: 300,
        alignSelf: 'center'
    },
    btnHome: {
        width: '100%',
        height: 52,
        marginTop:24,
        alignSelf: 'center',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor: '#E8E8E8'
    },
    loginBtnText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
        letterSpacing: -0.5,
        height: 60,
        paddingTop: 16,
        color: Color.primaryPurple,
        textAlign: 'center'
    },
    dontAcc: {
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dontAccText: {
        fontFamily: FontFamily.gilroy,
        lineHeight: 16.48,
        fontWeight: '500',
        fontSize: 14,
        color: Color.black400,
        right: 8
    },
    signIN: {
        fontFamily: FontFamily.gilroy,
        lineHeight: 16.48,
        fontWeight: '600',
        fontSize: 14,
        color: Color.black800,
    },
});