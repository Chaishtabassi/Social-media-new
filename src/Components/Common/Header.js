
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LockerSvg from '../../Assets/SVG/locker.svg';
import LogoSvg from '../../Assets/SVG/logosmall.svg';
import InfoSvg from '../../Assets/SVG/info-circle.svg';
import { responsiveWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import Button from '../Common/Button';
import ArrowSvg from '../../Assets/SVG/arrow-left.svg';

const Header = ({ }) => {
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
                <View style={[styles.progressCircle,]}>
                    <Text style={styles.textTwo}>
                        {'2'}
                    </Text>
                </View>
                <View style={styles.lineNotfilled}></View>
                <View style={[styles.progressCircle, styles.lastProgressCircle]}>
                    <Text style={styles.textTwo}>
                        {'3'}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomCon}>
                <Text allowFontScaling={false} style={styles.bottomProgressText}>Create password</Text>
                <Text allowFontScaling={false} style={[styles.bottomProgressText, styles.activeBottomProgressText]}>Secure wallet</Text>
                <Text allowFontScaling={false} style={[styles.bottomProgressText, styles.inactiveBottomProgressText]}>Confirm Secret Recovery phrase</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 20,
        justifyContent: 'space-between',
    },
    arrowSvg: {
        marginTop: 8,
    },
    logoCon: {
        flexDirection: 'row',
        marginRight: responsiveWidth(37),
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

    lastProgressCircle: {
        borderColor: '#CEC4E8',
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
    progressCircle: {
        height: responsiveWidth(7),
        width: responsiveWidth(7),
        borderRadius: responsiveWidth(6),
        borderWidth: 2,
        borderColor: Color.primaryPurple,
        backgroundColor: Color.primarybg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTwo: {
        color: "#555555",
        fontSize: FontSize.size_14,
        fontWeight: '600',
        fontFamily: FontFamily.gilroy,
        lineHeight: 16.7,
    },
    lineNotfilled: {
        backgroundColor: '#CEC4E8',
        width: '25%',
        height: 2,
        marginLeft: 1,
    },
    bottomCon: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 8,
        alignSelf: "center",
        width: "84%",
    },
    bottomProgressText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.12,
        color: Color.black800,
        textAlign: 'center',
    },
    activeBottomProgressText: {
        color: Color.primaryPurple,
    },
    inactiveBottomProgressText: {
        color: "#555555",
        width: 100,
    },
});

export default Header;

