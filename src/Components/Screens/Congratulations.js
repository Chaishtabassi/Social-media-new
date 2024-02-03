import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import LockerSvg from '../../Assets/SVG/locker.svg';
import LogoSvg from '../../Assets/SVG/logosmall.svg';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import Button from '../Common/Button';
import ArrowSvg from '../../Assets/SVG/arrow-left.svg'
import LinearGradient from 'react-native-linear-gradient';



const Congratulations = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ArrowSvg style={styles.arrowSvg} />
                <View style={styles.logoCon}>
                    <LogoSvg />
                    <Text style={styles.logoname}>Kapslog</Text>
                </View>
            </View>
            <View style={styles.progressContainer}>


                <LinearGradient
                    style={[styles.filedProgressCircle]}
                    colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
                    locations={[-5, 1, 0, 1]}
                >
                    <Text style={styles.textOne}>
                        {'1'}
                    </Text>
                </LinearGradient>

                <LinearGradient
                    style={styles.lineHorizontal}
                    colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
                    locations={[-5, 1, 0, 1]}
                />

                <LinearGradient
                    style={[styles.filedProgressCircle]}
                    colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
                    locations={[-5, 1, 0, 1]}
                >
                    <Text style={styles.textOne}>
                        {'2'}
                    </Text>
                </LinearGradient>

                <LinearGradient
                    style={styles.lineHorizontal}
                    colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
                    locations={[-5, 1, 0, 1]}
                />
                <LinearGradient
                    style={[styles.filedProgressCircle]}
                    colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
                    locations={[-5, 1, 0, 1]}
                >
                    <Text style={styles.textOne}>
                        {'2'}
                    </Text>
                </LinearGradient>


            </View>
            <View style={styles.bottomCon}>
                <Text style={styles.bottomProgressText}>Create password</Text>
                <Text style={{ ...styles.bottomProgressText }}>Secure wallet</Text>
                <Text style={{ ...styles.bottomProgressText, width: 100, color: Color.primaryPurple }}>Confirm Secret Recovery phrase</Text>
            </View>


            <View style={styles.containerMiddle}>
                <LockerSvg
                    style={styles.lockerSvg}
                />
                <Text style={styles.congratulationsText}>Congratulations</Text>
                <Text style={styles.paragraphText}>You’ve successfully protected your wallet.</Text>
                <Text style={styles.paragraphText2}>Remember to keep your Secret Recovery</Text>
                <Text style={styles.paragraphText3}>Phrase safe, it’s your responsibility!</Text>

                <Text style={styles.headingText}>Leave yourself a hint?</Text>

                <View style={styles.headingUndrerline}></View>
                <Text style={styles.bottomText}>cannot recover your wallet should you lose</Text>
                <Text style={styles.bottomText2}>it. You can find your Secret Recovery</Text>
                <Text style={styles.bottomText3}>Phrase in Settings {">"} Security & Privacy.</Text>
                <Text style={styles.learnMore}>Learn More</Text>
            </View>
            <Pressable   onPress={() => navigation.navigate("Bottom")} >
            <LinearGradient
               style={[styles.btnHome]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>Done</Text>
            </LinearGradient>
      </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.primarybg,
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
    imageContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    arrowSvg: {
        marginTop: 8,
    },
    logoCon: {
        flexDirection: 'row',
        marginRight: responsiveWidth(37)
    },
    logoname: {
        height: 29,
        fontFamily: FontFamily.gilroy,
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21.76,
        letterSpacing: -0.02,
        color: Color.gray9,
        marginTop: 8,

    },
    progressContainer: {
        marginTop: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    filedProgressCircle: {
        height: responsiveWidth(7),
        width: responsiveWidth(7),
        borderRadius: responsiveWidth(6),
        backgroundColor: '#7B4AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textOne: {
        color: Color.primaryWhite,
        fontSize: FontSize.size_14,
        fontWeight: '600',
        fontFamily: FontFamily.gilroy,
        lineHeight: 16.7,
    },

    lineHorizontal: {
        width: '25%',
        height: 2,
        marginHorizontal: -1,
    },
    bottomCon: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 8,
        alignSelf: "center",
        width: "84%"

    },
    bottomProgressText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.12,
        color: Color.black800,
        textAlign: 'center',
    },

    containerMiddle: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(45),
        backgroundColor: Color.primaryWhite,
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: 20,
        flexDirection: 'column',
    },
    lockerSvg: {
        marginTop: 20,
        alignSelf: 'center',
    },
    congratulationsText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 29.02,
        letterSpacing: -0.02,
        alignSelf: 'center',
        color: Color.black700,
        marginTop: 8,


    },
    paragraphText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: Color.black400,
        paddingTop: 4,
        textAlign: 'center',
    },
    paragraphText2: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: Color.black400,
        textAlign: 'center',

    },
    paragraphText3: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: Color.black400,
        textAlign: 'center',

    },
    headingText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: "#ff719c",
        alignSelf: 'center',
        marginTop: 20,

    },
    headingUndrerline: {
        backgroundColor: '#E8E8E8',
        width: "100%",
        height: 0.6,
        marginTop: 20,

    },
    bottomText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: Color.black400,
        paddingTop: 20,
        textAlign: 'center',
    },
    bottomText2: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: Color.black400,
        textAlign: 'center',
    },
    bottomText3: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: Color.black400,
        textAlign: 'center',
    },
    learnMore: {
        fontFamily: FontFamily.gilroy,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.48,
        color: Color.primaryPurple,
        textAlign: 'center',
        paddingTop: 12,

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


});

export default Congratulations;


