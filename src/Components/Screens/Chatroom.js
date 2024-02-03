import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontFamily, Color } from '../../Styles/Colors'

const Chatroom = () => {
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
            source={require('../../Assets/Images/arrow-left.png')}
            style={{ width: 20, height: 20 }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Chat Room</Text>

        <View style={{flexDirection:'row'}}>
            <Image style={{height:24,width:24,marginRight:8}} source={require('../../Assets/Images/messenger.png')}/>
            <Image style={{height:24,width:24}} source={require('../../Assets/Images/add.png')}/>
        </View>
    </View>


    </View>
  )
}

export default Chatroom

const styles = StyleSheet.create({})