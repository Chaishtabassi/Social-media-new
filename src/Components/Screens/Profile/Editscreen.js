import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Pressable } from 'react-native'
import React from 'react'
import { FontFamily, Color } from '../../../Styles/Colors'
import LinearGradient from 'react-native-linear-gradient';

const Editscreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
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

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Edit Profile</Text>

                <View></View>
            </View>

            <View style={{ alignItems: 'center', top: 10 }}>
                <Image style={{ height: 90, width: 90 }} source={require('../../../Assets/Images/Ellipse.png')} />
                <View style={{ position: 'absolute', top: 65 }}>
                    <Image style={{ height: 30, width: 30, marginLeft: 50 }} source={require('../../../Assets/Images/Editprofile.png')} />
                </View>
            </View>

            <View style={{ top: 30 }}>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }} >First Name</Text>
                    <View style={styles.inputContainer}>

                        <TextInput style={styles.userInput} placeholder='Enter First Name' placeholderTextColor={Color.black400}></TextInput>

                    </View>
                </View>

                <View style={{ paddingHorizontal: 20, top: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }} >Last Name</Text>
                    <View style={styles.inputContainer}>

                        <TextInput style={styles.userInput} placeholder='Enter Last Name' placeholderTextColor={Color.black400}></TextInput>

                    </View>
                </View>

                <View style={{ paddingHorizontal: 20, top: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }} >Bio</Text>

                    <View style={styles.inputContainer1}>

                        <TextInput style={styles.userInput} placeholder='Write Bio Here' multiline placeholderTextColor={Color.black400}></TextInput>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', top: 30, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'red', fontFamily: FontFamily.gilroy, }}>Note:</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#555', fontFamily: FontFamily.gilroy, }}> Mandatory for Dating</Text>
                </View>

                <Pressable  onPress={() => navigation.navigate("Changepasssword")} style={{ flexDirection: 'row', top: 50, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 20, width: 20 }} source={require('../../../Assets/Images/lockred.png')} />
                        <Text style={{ fontSize: 14, fontWeight: '600', color: 'red', fontFamily: FontFamily.gilroy, marginLeft: 5 }}>Change Password</Text>
                    </View>
                    <View>
                        <Image style={{ height: 20, width: 20 }} source={require('../../../Assets/Images/arrow-right.png')} />
                    </View>
                </Pressable>

            </View>

            <View style={{ bottom: 0, position: 'absolute', width: '100%' }}>
                <TouchableOpacity>
                    <LinearGradient
                        style={styles.button}
                        colors={['#946dfe', '#794be9']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.buttontext}>Save Change</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{ position: 'absolute', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../Assets/Images/trash.png')} />
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'red', fontFamily: FontFamily.gilroy, marginLeft: 5 }}>Delete Account</Text>
                </View>
            </View>

        </View>
    )
}

export default Editscreen

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
    inputContainer1: {
        marginTop: 8,
        borderWidth: 1,
        borderColor: Color.black800,
        borderRadius: 20,
        height: 108,
        flexDirection: 'row',
        borderColor: '#E8E8E8',
    },
    button: {
        height: 42,
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor: 'red',
        margin: 20,
        top: 13,
        justifyContent: 'center',
    },
    buttontext: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: FontFamily.gilroy,
    }
})