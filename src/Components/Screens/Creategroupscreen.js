import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../../Styles/Colors';

const Creategroupscreen = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
    ];

   
    const renderItem = ({ item }) => {
        const isSelected = selectedItems.includes(item.id);

        return (
            <TouchableOpacity
                onPress={() => handleItemPress(item.id)}
                style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
            >
                <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>{item.heading}</Text>
                    <Text>{item.subheading}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => handleCheckboxPress(item.id)}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                            {isSelected && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: 'black' }} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    const handleItemPress = (itemId) => {
        const updatedSelectedItems = selectedItems.includes(itemId)
            ? selectedItems.filter((id) => id !== itemId)
            : [...selectedItems, itemId];

        setSelectedItems(updatedSelectedItems);
        setIsButtonDisabled(updatedSelectedItems.length === 0);
    }

    const handleCheckboxPress = (itemId) => {
        setSelectedItems((prevSelected) => {
            if (prevSelected.includes(itemId)) {
                return prevSelected.filter((id) => id !== itemId);
            } else {
                return [...prevSelected, itemId];
            }
        });
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
                <Image
                    source={require('../../Assets/Images/arrow-left.png')}
                    style={{ width: 20, height: 20 }}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Create Group</Text>
                <View style={{ height: 20, width: 20 }} />
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
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {selectedItems.map((itemId) => {
                        const selectedItem = data.find((item) => item.id === itemId);
                        return (
                            <View key={itemId} style={{ marginRight: 10,borderRadius:15,backgroundColor:'#e8e8e8',paddingHorizontal:10,paddingVertical:5 }}>
                                <Text style={{fontSize:14,fontWeight:'500', fontFamily: FontFamily.gilroy,}}>{selectedItem?.heading}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={{ paddingHorizontal: 20, top: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', fontFamily: FontFamily.gilroy, }}>Suggested</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={{ paddingHorizontal: 20, top: 15 }}
            />
            <TouchableOpacity disabled={isButtonDisabled}>
            <LinearGradient
            style={[styles.button, isButtonDisabled && styles.disabledButton]}
                colors={['#946dfe', '#794be9']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttontext}>Create Group Chat</Text>
            </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default Creategroupscreen

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
    button:{
        height:42,
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor:'red',
        margin:20,
        top:13,
        justifyContent:'center'
    },
    disabledButton: {
        backgroundColor: '#e8e8e8',
        opacity: 0.5, 
    },
    buttontext:{
     color:'white',
     fontSize:15,
     fontWeight:'400',
     fontFamily: FontFamily.gilroy,
    }
})