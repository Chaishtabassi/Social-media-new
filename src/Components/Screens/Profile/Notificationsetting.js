import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { FontFamily, Color } from '../../../Styles/Colors'
import ToggleSwitch from 'toggle-switch-react-native'

const Notificationsetting = () => {

    const [connectionRequestSwitch, setConnectionRequestSwitch] = useState(false);
    const [messgaetoogle, setmessagetoogle] = useState(false);
    const [newstoogle, setnewstoogle] = useState(false);
    const [Remindertoogle, setRemindertoogle] = useState(false)

    const handleConnectionRequestToggle = (isOn) => {
        setConnectionRequestSwitch(isOn);
    };

    const handlemessagetoogle = (isOn) => {
        setmessagetoogle(isOn);
    };

    const handlenewstoogle = (isOn) => {
        setnewstoogle(isOn);
    };

    const handleremindertoogle = (isOn) => {
        setRemindertoogle(isOn);
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
                    source={require('../../../Assets/Images/arrow-left.png')}
                    style={{ width: 20, height: 20 }}
                />

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#131313', fontFamily: FontFamily.gilroy, }}>Notification Settings</Text>

                <View></View>
            </View>

            <View style={{ paddingHorizontal: 20, top: 20, flexDirection: 'column', justifyContent: 'space-between', height: '43%' }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#131313' }}>Push Notification</Text>
                    <Text style={{ color: '#888888', fontSize: 14, fontWeight: '400' }}>Get push notifications in-app to find out what’s going on when you’re online</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#131313' }}>Connection Request</Text>
                    <ToggleSwitch
                        isOn={connectionRequestSwitch}
                        onColor="#794be9"
                        offColor="#e8e8e8"
                        labelStyle={{ color: 'black', fontWeight: '900' }}
                        size="medium"
                        onToggle={handleConnectionRequestToggle}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#131313' }}>Message</Text>
                    <ToggleSwitch
                        isOn={messgaetoogle}
                        onColor="#794be9"
                        offColor="#e8e8e8"
                        labelStyle={{ color: 'black', fontWeight: '900' }}
                        size="medium"
                        onToggle={handlemessagetoogle}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#131313' }}>Email Notification</Text>
                    <Text style={{ color: '#888888', fontSize: 14, fontWeight: '400' }}>Get push notifications in-app to find out what’s going on when you’re online</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#131313' }}>News & Updates</Text>
                    <ToggleSwitch
                        isOn={newstoogle}
                        onColor="#794be9"
                        offColor="#e8e8e8"
                        labelStyle={{ color: 'black', fontWeight: '900' }}
                        size="medium"
                        onToggle={handlenewstoogle}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#131313' }}>Reminders</Text>
                    <ToggleSwitch
                        isOn={Remindertoogle}
                        onColor="#794be9"
                        offColor="#e8e8e8"
                        labelStyle={{ color: 'black', fontWeight: '900' }}
                        size="medium"
                        onToggle={handleremindertoogle}
                    />
                </View>

            </View>
        </View>
    )
}

export default Notificationsetting

const styles = StyleSheet.create({})