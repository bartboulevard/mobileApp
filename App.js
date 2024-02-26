import React, {useEffect, useState} from "react";
import {Image} from "react-native";

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import SignIn from "./src/screens/auth/SignIn";

import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Settings from "./src/screens/app/Settings";
import CreateListing from "./src/screens/app/CreateListing";

import ProductDetails from "./src/screens/app/ProductDetails";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaProvider} from "react-native-safe-area-context";

import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

import Config from "react-native-config";
import {colors} from "/Users/student/MobileApp/utils/colors.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = React.createContext();


const WEB_CLIENT_ID = '388285231760-4b4vovvji6vsh8f6iau6gjmjrfet62bv.apps.googleusercontent.com'
const IOS_CLIENT_ID = '388285231760-vlefouihlusf2121qfq1a5cnilgqfcap.apps.googleusercontent.com'


const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
      <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
     screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
          ? require('./src/assets/tabs/home-active.png')
          : require('./src/assets/tabs/home.png')
        } else if (route.name === 'Favorites') {
          icon = focused
          ? require('./src/assets/tabs/bookmark-active.png')
          : require('./src/assets/tabs/bookmark.png')
        } else if (route.name === 'Profile') {
          icon = focused
          ? require('./src/assets/tabs/profile-active.png')
          : require('./src/assets/tabs/profile.png')
        }

        return <Image style={{width: 24, height: 24}} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGray}
    })}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    (async () => {
      const accessToken = await AsyncStorage.getItem('auth_token')
      setUser({accessToken})
    })()
  }, [])

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
      })
  }, [])

  const theme = {
    colors: {
      background: colors.white
    },
  };

  return (
    <SafeAreaProvider>
    <UserContext.Provider value={{user, setUser}}>
     <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          user?.accessToken ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name="Signin" component={SignIn} options={{headerShown: false}}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  </SafeAreaProvider>
  );
};

export default App;