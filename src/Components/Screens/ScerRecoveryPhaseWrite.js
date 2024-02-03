import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { responsiveWidth, responsiveScreenHeight, responsiveScreenWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { Color, FontFamily, FontSize } from '../../Styles/Colors';
import CopySvg from '../../Assets/SVG/copy.svg';
import Header from '../Common/Header';
import Button from '../Common/Button';
import LinearGradient from 'react-native-linear-gradient'

const ScerRecoveryPhaseWrite = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentContainer}>

        <Text style={styles.confirmPasswordDescriptionText}>
          {'Select each word in the order it was presented to you'}
        </Text>
        <View style={styles.blurView}>
          <View style={styles.selectRow}>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"1."}</Text>
              <View style={{ ...styles.selectContainer, borderColor: Color.primaryPurple, borderStyle: "solid", }}>
                <Text style={{ ...styles.selectText, }}>{"loyal"}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"2."}</Text>
              <View style={{ ...styles.selectContainer, borderColor: Color.primaryPurple, }}>
                <Text style={{ ...styles.selectText, }}>{"loyal"}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"3."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{""}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"4."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{""}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"5."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{""}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"6."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{""}</Text>
              </View>
            </View>
          </View>
          <View style={styles.selectRow}>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"7."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{" "}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"8."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{" "}</Text>
              </View>
            </View>
            <View style={styles.selectButtonText}>
              <Text style={styles.selectTextNumber}>{"9."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{" "}</Text>
              </View>
            </View>
            <View style={{ ...styles.selectButtonText, marginLeft: -21 }}>
              <Text style={styles.selectTextNumber}>{"10."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{" "}</Text>
              </View>
            </View>
            <View style={{ ...styles.selectButtonText, marginLeft: -21 }}>

              <Text style={styles.selectTextNumber}>{"11."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{" "}</Text>
              </View>
            </View>
            <View style={{ ...styles.selectButtonText, marginLeft: -21 }}>

              <Text style={styles.selectTextNumber}>{"12."}</Text>
              <View style={{ ...styles.selectContainer, }}>
                <Text style={{ ...styles.selectText, }}>{" "}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.selectionContiner}>
          <View style={styles.selectionColoum}>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"Federal"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"reunion"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"canal"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"depend"}</Text>
            </View>

          </View>
          <View style={styles.selectionColoum}>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"Federal"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"reunion"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"canal"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"depend"}</Text>
            </View>

          </View>
          <View style={styles.selectionColoum}>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"Federal"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"reunion"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"canal"}</Text>
            </View>
            <View style={styles.selectViewContainer}>
              <Text style={styles.selectionText}>{"depend"}</Text>
            </View>

          </View>
        </View>

      </View>
      <Pressable   onPress={() => navigation.navigate("Congratulations")} >
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

export default ScerRecoveryPhaseWrite;

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
    color: "#323232",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    width: "88%",
    alignSelf: "center",
    lineHeight: 20,
    fontFamily: FontFamily.gilroy,
    width: 260
  },
  blurView: {
    marginTop: 16,
    width: responsiveWidth(79),
    height: responsiveHeight(38),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 5,
  },
  selectContainer: {
    width: responsiveHeight(13),
    height: responsiveHeight(4),
    borderWidth: 1,
    borderRadius: 53,
    borderColor: "#E8E8E8",
    alignSelf: 'center',
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed'

  },
  selectButtonText: {
    width: responsiveHeight(18.5),
    height: responsiveHeight(4.5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6



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
  selectTextNumber: {
    color: Color.black800,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: "center",
    lineHeight: 18.83,
    fontFamily: FontFamily.gilroy,
    paddingTop: 17,
    paddingRight: 8
  },
  selectionContiner: {

    width: responsiveWidth(79),
    height: responsiveHeight(38),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

  },
  selectViewContainer: {
    width: responsiveWidth(24),
    height: responsiveHeight(3.3),
    borderWidth: 1,
    borderRadius: 53,
    borderColor: "#7B4AFF66",
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid'

  },
  selectionText: {
    color: Color.black800,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: "center",
    lineHeight: 16,
    fontFamily: FontFamily.gilroy,
  },
});
