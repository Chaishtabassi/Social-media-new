import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import { FontFamily } from '../../Styles/Colors'

const Messagescreen = () => {

  const data = [
    {
      id: '1',
      image: require('../../Assets/Images/Profile1.png'),
      heading: 'Brooklyn Simmons',
      subheading: 'Hello there!',
    },
    {
      id: '2',
      image: require('../../Assets/Images/Profile2.png'),
      heading: 'Kathryn Murphy',
      subheading: 'How are you?',
    },
    {
      id: '3',
      image: require('../../Assets/Images/Profile3.png'),
      heading: 'Kristin Watson',
      subheading: 'How are you?',
    },
    {
      id: '4',
      image: require('../../Assets/Images/Profile4.png'),
      heading: 'Albert Flores',
      subheading: 'How are you?',
    },
    {
      id: '5',
      image: require('../../Assets/Images/Profile5.png'),
      heading: 'Jane Cooper',
      subheading: 'How are you?',
    },
    {
      id: '6',
      image: require('../../Assets/Images/Profile6.png'),
      heading: 'Floyd Miles',
      subheading: 'How are you?',
    },
    {
      id: '7',
      image: require('../../Assets/Images/Profile7.png'),
      heading: 'Leslie Alexander',
      subheading: 'How are you?',
    },
    {
      id: '8',
      image: require('../../Assets/Images/Profile8.png'),
      heading: 'Darell Steward',
      subheading: 'How are you?',
    },
    {
      id: '9',
      image: require('../../Assets/Images/Profile9.png'),
      heading: 'Ronald Richards',
      subheading: 'How are you?',
    },
    {
      id: '10',
      image: require('../../Assets/Images/ProfilePic.png'),
      heading: 'Dianne Russell',
      subheading: 'How are you?',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313' , fontFamily: FontFamily.gilroy,}}>{item.heading}</Text>
        <Text>{item.subheading}</Text>
      </View>
    </View>
  );

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

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Message</Text>

        <Image
          source={require('../../Assets/Images/edit.png')}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ position: 'absolute', marginLeft: 30 }}>
          <Image
            source={require('../../Assets/Images/search-normal.png')}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#888888"
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ paddingHorizontal: 20 }}
      />
    </View>
  )
}

export default Messagescreen

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    color: '#333',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#888888',
    paddingHorizontal: 40
  },
})