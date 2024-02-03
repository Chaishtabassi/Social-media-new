import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity ,Pressable} from 'react-native'
import React, { useState, useRef } from 'react'
import { FontFamily, Color } from '../../../Styles/Colors'
import Postscreen from './Postscreen';
import Savedscreen from './Savedscreen';
import Tagscreen from './Tagscreen';
import BottomSheet from '@gorhom/bottom-sheet';
import { BlurView } from "@react-native-community/blur";

const Profilescreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Post');
  const bottomSheetRef = useRef(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  
  const handleSheetChanges = (index) => {
    // Check if the sheet is fully expanded or fully closed
    if (index === 1) {
      setIsBottomSheetOpen(true); // Show blur when fully expanded
    } else if (index === 0) {
      setIsBottomSheetOpen(false); // Hide blur when fully closed
    }
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
    setIsBottomSheetOpen(false);
  };


  const renderScreen = () => {
    switch (activeTab) {
      case 'Post':
        return <Postscreen />;
      case 'Saved':
        return <Savedscreen />;
      case 'Tag':
        return <Tagscreen />;
      default:
        return null;
    }
  };

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

        <View></View>

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Profile</Text>

        <TouchableOpacity onPress={openBottomSheet} style={styles.settingsButton}>
          <Image style={{ height: 24, width: 24 }} source={require('../../../Assets/Images/setting.png')} />
        </TouchableOpacity>



      </View>

      <View style={{ alignItems: 'center', top: 10 }}>
        <Image style={{ height: 90, width: 90 }} source={require('../../../Assets/Images/Ellipse.png')} />
        <Text style={{ fontSize: 18, fontWeight: '700', fontFamily: FontFamily.gilroy, color: '#131313' }}>Courtney Henry</Text>
        <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: FontFamily.gilroy, color: '#888888' }}>@Courtney Henry</Text>
        <Text style={{ fontSize: 14, fontWeight: '500', fontFamily: FontFamily.gilroy, color: '#323232' }}>Product Designer🚀</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-around', paddingVertical: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#242833', fontSize: 18, fontWeight: '600' }}>100</Text>
          <Text style={{ color: '#495057', fontSize: 12, fontWeight: '500' }}>Posted</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#242833', fontSize: 18, fontWeight: '600' }}>395</Text>
          <Text style={{ color: '#495057', fontSize: 12, fontWeight: '500' }}>Followers</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#242833', fontSize: 18, fontWeight: '600' }}>271</Text>
          <Text style={{ color: '#495057', fontSize: 12, fontWeight: '500' }}>Following</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', height: 40, marginHorizontal: 20 }}>
        <TouchableOpacity onPress={() => setActiveTab('Post')} style={{ flex: 1, borderRadius: 20, backgroundColor: activeTab === 'Post' ? '#885cfd' : '#F6F6F6', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: activeTab === 'Post' ? 'white' : '#888888', fontFamily: FontFamily.gilroy }}>Post</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Saved')} style={{ flex: 1, borderRadius: 20, backgroundColor: activeTab === 'Saved' ? '#885cfd' : '#F6F6F6', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: activeTab === 'Saved' ? 'white' : '#888888', fontFamily: FontFamily.gilroy }}>Saved</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Tag')} style={{ flex: 1, borderRadius: 20, backgroundColor: activeTab === 'Tag' ? '#885cfd' : '#F6F6F6', borderTopRightRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: activeTab === 'Tag' ? 'white' : '#888888', fontFamily: FontFamily.gilroy }}>Tag</Text>
        </TouchableOpacity>
      </View>

      {renderScreen()}

      {isBottomSheetOpen && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white" // Fallback color if not supported
        >
          <TouchableOpacity style={styles.overlay} onPress={closeBottomSheet} />
        </BlurView>
      )}
      
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['6%', '66%']}
        onChange={handleSheetChanges}
      >
        <View style={{backgroundColor:'white'}}>

          <Pressable onPress={() => navigation.navigate("edit")}  style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:7}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:40,width:40}} source={require('../../../Assets/Images/profilee.png')}/>
            <Text style={{fontSize:16,fontWeight:'500',color:'#131313',fontFamily: FontFamily.gilroy,marginLeft:10}}>Edit Profile</Text>
           </View>
           <Image source={require('../../../Assets/Images/arrow-right.png')}/>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("NotificationSetting")} style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:7}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:40,width:40}} source={require('../../../Assets/Images/ntification.png')}/>
            <Text style={{fontSize:16,fontWeight:'500',color:'#131313',fontFamily: FontFamily.gilroy,marginLeft:10}}>Notification Settings</Text>
           </View>
           <Image source={require('../../../Assets/Images/arrow-right.png')}/>
          </Pressable>

          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:7}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:40,width:40}} source={require('../../../Assets/Images/accountcentre.png')}/>
            <Text style={{fontSize:16,fontWeight:'500',color:'#131313',fontFamily: FontFamily.gilroy,marginLeft:10}}>Account Centre</Text>
           </View>
           <Image source={require('../../../Assets/Images/arrow-right.png')}/>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:7}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:40,width:40}} source={require('../../../Assets/Images/helpandsupport.png')}/>
            <Text style={{fontSize:16,fontWeight:'500',color:'#131313',fontFamily: FontFamily.gilroy,marginLeft:10}}>Help & Support</Text>
           </View>
           <Image source={require('../../../Assets/Images/arrow-right.png')}/>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:7}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:40,width:40}} source={require('../../../Assets/Images/aboutus.png')}/>
            <Text style={{fontSize:16,fontWeight:'500',color:'#131313',fontFamily: FontFamily.gilroy,marginLeft:10}}>About us </Text>
           </View>
           <Image source={require('../../../Assets/Images/arrow-right.png')}/>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:20,paddingVertical:7}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:40,width:40}} source={require('../../../Assets/Images/logout.png')}/>
            <Text style={{fontSize:16,fontWeight:'500',color:'#131313',fontFamily: FontFamily.gilroy,marginLeft:10}}>Log out</Text>
           </View>
           <Image source={require('../../../Assets/Images/arrow-right.png')}/>
          </View>

          <TouchableOpacity style={styles.button}>
  
                <Text style={styles.buttontext}>Cancel</Text>
            </TouchableOpacity>
       
        </View>
      </BottomSheet>
    </View>
  )
}

export default Profilescreen

const styles = StyleSheet.create({
  button:{
    height:42,
    alignItems: 'center',
    borderRadius: 18,
    margin:20,
    backgroundColor:'#FFF5F5',
    justifyContent:'center',
},
buttontext:{
 color:'red',
 fontSize:15,
 fontWeight:'400',
 fontFamily: FontFamily.gilroy,
}
})