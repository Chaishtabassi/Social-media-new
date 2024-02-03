import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React from 'react'

const Searchscreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
          <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' ,top:20}}>
                <View style={{ position: 'absolute', marginLeft: 30 }}>
                    <Image
                        source={require('../../../Assets/Images/search-normal.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#888888"
                />
                  <View style={{ position: 'absolute',right: 30  }}>
                    <Image
                        source={require('../../../Assets/Images/close-circle.png')}
                        style={{ width: 23, height: 23 }}
                    />
                </View>
            </View>

            <View style={{paddingHorizontal:20,top:30}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:14,fontWeight:'600',color:'#888888'}}>Recent</Text>
                <Text style={{fontSize:16,fontWeight:'600',color:'red'}}>Clear</Text>
              </View>
            </View>
    </View>
  )
}

export default Searchscreen

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    color: '#333',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#888888',
    paddingHorizontal: 40,
},
})