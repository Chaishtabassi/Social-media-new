import React from 'react';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LockerSvg from '../../Assets/SVG/locker.svg';
import LogoSvg from '../../Assets/SVG/logosmall.svg';
import InfoSvg from '../../Assets/SVG/info-circle.svg';
import { responsiveWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import Button from '../Common/Button';
import ArrowSvg from '../../Assets/SVG/arrow-left.svg';

const SecureYourWallet = ({navigation}) => {
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
            <View style={styles.contentContainer}>
                <LockerSvg style={styles.lockerSvg} />
                <Text style={styles.secureText}>Secure your wallet</Text>
                <View style={styles.secureYourWalletRecovery}>
                    <Text style={styles.secureYourText}>
                        {'Secure your wallet’s'}
                        <Text style={styles.secureYourTextHighlight}>
                            {' secret recovery phrase.'}
                        </Text>
                    </Text>
                </View>
                <View style={styles.importantContainer}>
                    <InfoSvg />
                    <View>
                        <Text style={styles.importantText}>
                            {'Why is it important?'}
                        </Text>
                    </View>
                </View>
                <View style={styles.headingUndrerline}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.manualHeading}>
                        {'Manual'}
                    </Text>
                    <Text style={styles.manualText}>
                        {'Write down your secret recovery phrase on a piece of paper and store in a safe place.'}
                    </Text>
                    <View style={styles.securityLevelContainer}>
                        <Text style={styles.securityLevelLabel}>
                            {'Security level :'}
                        </Text>
                        <Text style={styles.securityLevelText}>
                            {'Very strong'}
                        </Text>
                        <View style={styles.securityLevelDotsContainer}>
                            <View style={styles.greenDot} />
                            <View style={styles.greenDot} />
                            <View style={styles.greenDot} />
                        </View>
                    </View>
                    <View style={styles.risksContainer}>
                        <Text style={styles.risksLabel}>Risks are :</Text>
                        <View style={styles.risksContentContainer}>
                            <View style={styles.riskItem}>
                                <View style={styles.riskDot} />
                                <Text style={styles.riskText}>You lose it</Text>
                            </View>
                            <View style={styles.riskItem}>
                                <View style={styles.riskDot} />
                                <Text style={styles.riskText}>You forgot where you put it</Text>
                            </View>
                            <View style={styles.riskItem}>
                                <View style={styles.riskDot} />
                                <Text style={styles.riskText}>Someone else finds it</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.otherOptionsContainer}>
                        <Text style={styles.otherOptionsLabel}>Other options :</Text>
                        <View style={styles.otherOptionsContentContainer}>
                            <Text style={styles.otherOptionsText}>Doesn’t have to be paper!</Text>
                        </View>
                    </View>

                    <View style={styles.tipsContainer}>
                        <Text style={styles.tipsLabel}>Tips :</Text>
                        <View style={styles.tipsContentContainer}>
                            <View style={styles.tipItem}>
                                <View style={styles.tipDot} />
                                <Text style={styles.tipText}>Store in bank vault</Text>
                            </View>
                            <View style={styles.tipItem}>
                                <View style={styles.tipDot} />
                                <Text style={styles.tipText}>Store in a safe</Text>
                            </View>
                            <View style={styles.tipItem}>
                                <View style={styles.tipDot} />
                                <Text style={styles.tipText}>Store in multiple secret places</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
            <Pressable   onPress={() => navigation.navigate("SceretRecoveryPhase")} >
            <LinearGradient
               style={[styles.btnHome]} 
               colors={["#936BFF", "#7B4AFF", 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
               locations={[-5, 1, 0, 1]}
            >
               <Text style={styles.loginBtnText}>Start</Text>
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
    imageContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 20,
        justifyContent: 'space-between',
    },
    arrowSvg: {
        marginTop: 8,
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
    contentContainer: {
        width: responsiveWidth(90),
        height: responsiveScreenHeight(64),
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
    secureText: {
        fontFamily: FontFamily.gilroy,
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 29.02,
        letterSpacing: -0.02,
        alignSelf: 'center',
        color: Color.black700,
        marginTop: 8,
    },
    secureYourWalletRecovery: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4,
    },
    secureYourText: {
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight: 16.48,
        color: Color.black400,
        paddingTop: 4,
        textAlign: 'center',
    },
    secureYourTextHighlight: {
        color: "#228BE6",
        fontFamily: FontFamily.gilroy,
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight: 16.48,
        textAlign: 'center',
    },
    importantContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    importantText: {
        marginLeft: 5,
        fontFamily: FontFamily.gilroy,
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 14.32,
        color: '#7B4AFF',
        paddingTop: 4,
        textAlign: 'center',
    },
    headingUndrerline: {
        backgroundColor: '#E8E8E8',
        width: "100%",
        height: 0.6,
        marginTop: 16,
    },
    textContainer: {
        marginHorizontal: 20,
        marginTop: 16,
    },
    manualHeading: {
        fontFamily: FontFamily.gilroy,
        fontSize: 16,
        fontWeight: '600',
        color: '#131313',
        lineHeight: 19.09,
        letterSpacing: -1,
    },
    manualText: {
        fontSize: FontSize.size_14,
        fontWeight: '500',
        color: '#888888',
        marginTop: 4,
        lineHeight: 18,
        width: "90%"

    },
    securityLevelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    securityLevelLabel: {
        color: Color.black400,
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight: 18

    },
    securityLevelText: {
        color: '#131313',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 5,
        lineHeight: 18,
    },
    securityLevelDotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 0.29,
        left: 98
    },
    greenDot: {
        width: 12,
        height: 12,
        backgroundColor: '#40C057',
        borderRadius: 4,
    },
    risksContainer: {
        marginTop:12,
    
    },
    risksLabel: {
        fontFamily: FontFamily.gilroy,
        color: Color.black400,
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight:18
    },
    risksContentContainer: {
        marginLeft: 11,
        marginTop:4,
    },
    riskItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    riskDot: {
        height: 4,
        width: 4,
        borderRadius: 12,
        backgroundColor: "#555",
    },
    riskText: {
        color: "#555555",
        fontSize: FontSize.size_14,
        fontWeight: "500",
        lineHeight: 18,
        marginLeft: 8,
    },

    otherOptionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    otherOptionsLabel: {
        color: '#888',
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight:18,
    },
    otherOptionsContentContainer: {
        flex: 1,
    },
    otherOptionsText: {
        color: '#555',
        fontSize: FontSize.size_14,
        fontWeight: '500',
        marginLeft: 5,
        lineHeight:18,
    },

    tipsContainer: {
        marginTop:12,
    },
    tipsLabel: {
        color: '#888',
        fontSize: FontSize.size_14,
        fontWeight: '500',
        lineHeight:18,
    },
    tipsContentContainer: {
        marginLeft: 11,
        marginTop:4,
    },
    tipItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tipDot: {
        height: 4,
        width: 4,
        borderRadius: 12,
        backgroundColor: "#555",
    },
    tipText: {
        color: '#555',
        fontSize: FontSize.size_14,
        fontWeight: '500',
        marginLeft: 5,
        lineHeight:18,
    },


});

export default SecureYourWallet;
