import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { FontFamily } from '../../Styles/Colors';

const Chatingscreen = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 44,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require('../../Assets/Images/arrow-left.png')}
          style={{ width: 20, height: 20 }}
        />
        <Image
          source={require('../../Assets/Images/Profile1.png')}
          style={{ width: 20, height: 20, marginLeft: 15 }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', marginLeft: 15 ,fontFamily: FontFamily.gilroy,}}>Brooklyn Simmons</Text>
      </View>
      <View style={{ padding: 20, flexDirection: 'row', position: 'absolute', bottom: 0 }}>
        <LinearGradient
          colors={['#946dfe', '#794be9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: 50, width: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image style={{ height: 30, width: 30 }} source={require('../../Assets/Images/camera.png')} />
        </LinearGradient>

        <View style={{ flexDirection: 'row', alignItems: 'center', flexDirection: 'row-reverse' ,marginRight:10}}>
          <TextInput
            style={[styles.input, { width: screenWidth * 0.7 }]}
            placeholder="Search"
            placeholderTextColor="#888888"
          />

          <View style={{ position: 'absolute', flexDirection: 'row' }}>
            <Image
              source={require('../../Assets/Images/microphone.png')}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />

            <Image
              source={require('../../Assets/Images/gallery.png')}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />

            <Image
              source={require('../../Assets/Images/add.png')}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
          </View>
        </View>

      </View>
    </View>
  )
}

export default Chatingscreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    color: '#333',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#888888',
    paddingHorizontal: 10,
  },
})