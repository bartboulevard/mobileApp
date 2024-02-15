import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import SignIn from "./src/screens/auth/SignIn";
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from "react-native-config";

const WEB_CLIENT_ID = '388285231760-4b4vovvji6vsh8f6iau6gjmjrfet62bv.apps.googleusercontent.com'
const IOS_CLIENT_ID = '388285231760-vlefouihlusf2121qfq1a5cnilgqfcap.apps.googleusercontent.com'
const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
      })
  }, [])
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
};

export default React.memo(App);