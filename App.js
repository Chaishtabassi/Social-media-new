import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Color } from './src/Styles/Colors';
import StackNavigation from './src/Stack Navigation/StackNavigation';
import GetStarted from './src/Components/Screens/GetStarted';
import SceretRecoveryPhase from './src/Components/Screens/SceretRecoveryPhase';

import SignUp from './src/Components/Screens/SignUp';
import Messagescreen from './src/Components/Screens/Messagescreen';
import Creategroupscreen from './src/Components/Screens/Creategroupscreen';
import Homescreen from './src/Components/Screens/Homescreen';
import Chatingscreen from './src/Components/Screens/Chatingscreen';
import Changepasssword from './src/Components/Screens/Profile/Changepasssword';
import Editscreen from './src/Components/Screens/Profile/Editscreen';
import Notificationscreen from './src/Components/Screens/Profile/Notificationscreen';
import Notificationsetting from './src/Components/Screens/Profile/Notificationsetting';
import Chatroom from './src/Components/Screens/Chatroom';
import Bottombar from './src/Stack Navigation/Bottombar';


const App = () => {
  return (
    <View style={styles.container}>
      <StackNavigation/>
      {/* <GetStarted/> */}
      {/* <SceretRecoveryPhase/> */}
      {/* <SignUp/> */}
      {/* <Messagescreen/> */}
      {/* <Creategroupscreen/> */}
      {/* <Chatingscreen/> */}
      {/* <Changepasssword/> */}
      {/* <Editscreen/> */}
      {/* <Notificationscreen/> */}
      {/* <Notificationsetting /> */}
      {/* <Chatroom/> */}
    </View >

  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: Color.primarybg,
  },

});

export default App;


