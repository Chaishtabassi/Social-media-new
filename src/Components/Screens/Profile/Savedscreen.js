import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

const image1 = require('../../../Assets/Images/post1.png');
const image2 = require('../../../Assets/Images/post2.png');
const image3 = require('../../../Assets/Images/post3.png');
const image4 = require('../../../Assets/Images/post4.png');
const image5 = require('../../../Assets/Images/post5.png');
const image6 = require('../../../Assets/Images/post6.png');
const image7 = require('../../../Assets/Images/post7.png');
const image8 = require('../../../Assets/Images/post1.png');
const image9 = require('../../../Assets/Images/post2.png');
const image10 = require('../../../Assets/Images/post3.png');
const image11 = require('../../../Assets/Images/post4.png');
const image12 = require('../../../Assets/Images/post5.png');


const data = [
  { id: '1', source: image1 },
  { id: '2', source: image2 },
  { id: '3', source: image3 },
  { id: '4', source: image4 },
  { id: '5', source: image5 },
  { id: '6', source: image6 },
  { id: '7', source: image7 },
  { id: '8', source: image8 },
  { id: '9', source: image9 },
  { id: '10', source: image10 },
  { id: '11', source: image11 },
  { id: '12', source: image12 },
];

const Savedscreen = () => {
  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
    />
  );
};

export default Savedscreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    top:10
    // paddingVertical:7
  },
  image: {
    width: '30%',
    aspectRatio: 1, 
    margin: 5,
  },
});