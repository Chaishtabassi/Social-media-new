import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FontFamily, Color } from '../../../Styles/Colors'

const Notificationscreen = () => {
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

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Notification</Text>

                <View></View>
            </View>
    </View>
  )
}

export default Notificationscreen

const styles = StyleSheet.create({})