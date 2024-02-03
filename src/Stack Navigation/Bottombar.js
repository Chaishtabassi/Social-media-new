import React from 'react';
import { Alert, Animated, StyleSheet, TouchableOpacity, View,Text,Image } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Homescreen from '../Components/Screens/Homescreen';
import Profilescreen from '../Components/Screens/Profile/Profilescreen';
import LinearGradient from 'react-native-linear-gradient';
import Searchscreen from '../Components/Screens/Search/Searchscreen';
import Datingscreen from '../Components/Screens/Datingscreen';

const Bottombar = ({navigation}) => {
  const _renderIcon = (routeName, selectedTab) => {
    let imageSource = null;

    switch (routeName) {
      case 'title1':
        imageSource = require('../Assets/Images/home.png');
        break;
      case 'title2':
        imageSource = require('../Assets/Images/searchbott.png');
        break;
        case 'title3':
            imageSource = require('../Assets/Images/heart-tick.png');
            break;
            case 'title4':
                imageSource = require('../Assets/Images/user.png');
                break;
    }

    return (
        <Image
        source={imageSource}
        style={{
          width: 25,
          height: 25,
          tintColor: routeName === selectedTab ? '#7d4afe' : '#939393',
        }}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="white"
      initialRouteName="title1"
      screenOptions={{
        headerShown: false, 
      }}
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
        <LinearGradient
          colors={['#946dfe', '#794be9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, styles.gradientButton]}
        >
          <TouchableOpacity
            onPress={() => Alert.alert('Click Action')}
          >
            <Image style={{ height: 20, width: 20 }} source={require('../Assets/Images/plus.png')} />
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="title1"
        position="LEFT"
        component={() => <Homescreen/>}
      />
      <CurvedBottomBar.Screen
        name="title2"
        component={() => <Searchscreen/>}
        position="LEFT"
      />
       <CurvedBottomBar.Screen
        name="title3"
        component={() => <Datingscreen/>}
        position="RIGHT"
      />
       <CurvedBottomBar.Screen
        name="title4"
        component={(props) => <Profilescreen {...props} navigation={navigation} />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  gradientButton: {
    width:60,
    borderRadius: 30, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCircleUp: {
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});

export default Bottombar;
