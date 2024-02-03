import LinearGradient from 'react-native-linear-gradient'
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { responsiveWidth, responsiveScreenHeight, responsiveScreenWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import CopySvg from '../../Assets/SVG/copy.svg';
import Header from '../Common/Header';
import Button from '../Common/Button';

const SceretRecoveryPhaseView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.contentContainer}>

                <Text style={styles.confirmPasswordHeadingText}>
                    {'Write down your Secret Recovery Phase'}
                </Text>
                <Text style={styles.confirmPasswordDescriptionText}>
                    {'This is your Secret Recovery Phrase. Write it down on a paper and keep it in a safe place. You’ll be asked to re-enter this phrase(in order) on the next step'}
                </Text>
                <View style={styles.blurView}
                    resizeMode='cover'
                    // source={imgSrc} 
                    blurRadius={1}>
                    <View style={styles.selectRow}>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"1.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"2.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"3.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"4.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"5.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"6.  This"}</Text>
                        </View>
                    </View>
                    <View style={styles.selectRow}>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"7.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"8.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"9.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"10.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"11.  This"}</Text>
                        </View>
                        <View style={styles.selectContainer}>
                            <Text style={styles.selectText}>{"12.  This"}</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={styles.copyButton}>
                    <CopySvg />
                    <Text style={styles.copyButtonText}>
                        {'Copy Secret Key'}
                    </Text>
                </Pressable>

            </View>
            <Pressable   onPress={() => navigation.navigate("SceretRecoveryPhaseWrite")} >
            <LinearGradient
               style={[styles.btnHome]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>Continue</Text>
            </LinearGradient>
      </Pressable>
        </View>
    );
};

export default SceretRecoveryPhaseView;

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
    confirmPasswordHeadingText: {
        color: Color.black700,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 20,
        width: 300,
        alignSelf: "center",
        lineHeight: 29.02,
        fontFamily: FontFamily.gilroy,

    },

    contentContainer: {
        marginTop: 20,
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(66),
        backgroundColor: Color.primaryWhite,
        alignSelf: 'center',
        borderRadius: 30,
        top: -10,
        flexDirection: 'column',
    },
    confirmPasswordDescriptionText: {
        color: Color.black400,
        textAlign: 'center',
        fontSize: FontSize.size_14,
        fontWeight: '500',
        marginTop: 8,
        width: "88%",
        alignSelf: "center",
        lineHeight: 15,
        fontFamily: FontFamily.gilroy,
    },
    blurView: {
        marginTop: 16,
        width: responsiveWidth(79),
        height: responsiveHeight(39.5),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 5,
    },
    selectContainer: {
        width: responsiveHeight(16),
        height: responsiveHeight(4.5),
        borderWidth: 1,
        borderRadius: 53,
        borderColor: "#E8E8E8",
        alignSelf: 'center',
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'

    },
    selectText: {
        color: Color.black800,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        alignSelf: "center",
        lineHeight: 18.83,
        fontFamily: FontFamily.gilroy,
    },
    copyButton: {
        width: responsiveHeight(20),
        height: responsiveHeight(5.6),
        borderWidth: 1,
        borderRadius: 60,
        borderColor: "#7B4AFF33",
        alignSelf: 'center',
        marginTop: 14,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    copyButtonText: {
        color: Color.primaryPurple,
        fontSize: FontSize.size_14,
        fontWeight: '600',
        lineHeight: 20,
        fontFamily: FontFamily.gilroy,
    },
});
