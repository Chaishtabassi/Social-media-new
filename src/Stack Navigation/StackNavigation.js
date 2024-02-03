import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../Components/Screens/Screens';
import Homescreen from '../Components/Screens/Homescreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="getstarted" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="getstarted" component={Screens.GetStarted} />
                <Stack.Screen name="LoginWithUsername" component={Screens.LoginWithUsername} />
                <Stack.Screen name="LoginWithMnemonic" component={Screens.LoginWithMnemonic} />
                <Stack.Screen name="LoginWithPassword" component={Screens.LoginWithPassword} />
                <Stack.Screen name="SignUp" component={Screens.SignUp} />
                <Stack.Screen name="Congratulations" component={Screens.Congratulations} />
                <Stack.Screen name="SecureYourWallet" component={Screens.SecureYourWallet} />
                <Stack.Screen name="ConfirmYourPassword" component={Screens.ConfirmYourPassword} />
                <Stack.Screen name="SceretRecoveryPhase" component={Screens.SceretRecoveryPhase} />
                <Stack.Screen name="SceretRecoveryView" component={Screens.SceretRecoveryPhaseView} />
                <Stack.Screen name="SceretRecoveryPhaseWrite" component={Screens.SceretRecoveryPhaseWrite} />
                <Stack.Screen name="Messagescreen" component={Screens.Messagescreen} />
                <Stack.Screen name="Creategroup" component={Screens.Creategroupscreen} />
                <Stack.Screen name="Chating" component={Screens.Chatingscreen} />
                <Stack.Screen name='Bottom' component={Screens.Bottombar}/>
                <Stack.Screen name='edit' component={Screens.Editscreen}/>
                <Stack.Screen name='NotificationSetting' component={Screens.Notificationsetting}/>
                <Stack.Screen name='Changepasssword' component={Screens.Changepasssword}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;




