import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontFamily } from '../../Styles/Colors';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

const Datingscreen = () => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../Assets/Images/dating.png')} />
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}>
        <Image source={require('../../Assets/Images/datinglogo.png')} />
        <Text style={{ fontSize: 22, fontWeight: '400', color: '#000000', fontFamily: FontFamily.gilroy, textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur.</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#868E96', fontFamily: FontFamily.gilroy, textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur. Venenatis consectetur nunc sollicitudin imperdiet.</Text>
        <TouchableOpacity onPress={toggleModal} style={{ width: '100%' }}>
          <LinearGradient
            style={styles.button}
            colors={['#946dfe', '#794be9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttontext}>Start Dating</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Image source={require('../../Assets/Images/datingimageprofile.png')} />
          <Text style={{ fontSize: 22, fontWeight: '400', color: '#000000', fontFamily: FontFamily.gilroy }}>Jenny Wilson</Text>
          <Text style={{ fontSize: 15, fontWeight: '400', color: '#555555', fontFamily: FontFamily.gilroy, textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur.</Text>
        </View>
      </Modal>

    </View>
  );
}

export default Datingscreen;

const styles = StyleSheet.create({
  button: {
    height: 42,
    alignItems: 'center',
    borderRadius: 18,
    margin: 20,
    top: 13,
    justifyContent: 'center',
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: FontFamily.gilroy,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: '80%',
    alignSelf: 'center',
  },
});
