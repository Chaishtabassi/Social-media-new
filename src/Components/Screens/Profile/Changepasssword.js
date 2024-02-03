import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontFamily ,Color} from '../../../Styles/Colors'
import LockSvg from '../../../Assets/SVG/lock.svg'
import EyeSvg from '../../../Assets/SVG/eye.svg'
import LinearGradient from 'react-native-linear-gradient';

const Changepasssword = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 44,
          paddingHorizontal: 20,
        }}
      >

        <Image
          source={require('../../../Assets/Images/arrow-left.png')}
          style={{ width: 20, height: 20 }}
        />

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Change Password</Text>

       <View></View>
      </View>
      <View style={{top:20}}>

        <View style={{paddingHorizontal:20}}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }} >Current Password</Text>
            <View style={styles.inputContainer}>
            <LockSvg
                style={styles.userIcon}
            />
            <TextInput style={styles.userInput} placeholder='Enter Confirm Password' placeholderTextColor={Color.black400}></TextInput>
            <EyeSvg
                style={styles.eyeIcon}
            />
        </View>
        </View>

        <View style={{paddingHorizontal:20,top:10}}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }} >New Password</Text>
            <View style={styles.inputContainer}>
            <LockSvg
                style={styles.userIcon}
            />
            <TextInput style={styles.userInput} placeholder='Enter Confirm Password' placeholderTextColor={Color.black400}></TextInput>
            <EyeSvg
                style={styles.eyeIcon}
            />
        </View>
        </View>

        <View style={{paddingHorizontal:20,top:20}}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }} >Confirm Password</Text>

<View style={styles.inputContainer}>
            <LockSvg
                style={styles.userIcon}
            />
            <TextInput style={styles.userInput} placeholder='Enter Confirm Password' placeholderTextColor={Color.black400}></TextInput>
            <EyeSvg
                style={styles.eyeIcon}
            />
        </View>
        </View>
      </View>

<View style={{bottom:0,position:'absolute',width:'100%'}}>
<TouchableOpacity>
            <LinearGradient
            style={styles.button}
                colors={['#946dfe', '#794be9']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttontext}>Change Password</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>

    </View>
  )
}

export default Changepasssword

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 8,
        borderWidth: 1,
        borderColor: Color.black800,
        borderRadius: 62,
        height: 48,
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
    button:{
        height:42,
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor:'red',
        margin:20,
        top:13,
        justifyContent:'center',
    },
    buttontext:{
     color:'white',
     fontSize:15,
     fontWeight:'400',
     fontFamily: FontFamily.gilroy,
    }
})