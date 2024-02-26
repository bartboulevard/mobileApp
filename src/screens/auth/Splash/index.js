import React, {useContext} from "react";
import {
     Text,
     View,
     Image,
     Pressable
} from "react-native"
import {UserContext} from "../../../../App";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = ({navigation}) => {
  const user = useContext(UserContext)
  console.log('user => ', user)

  const onSignUp = () => {
    navigation.navigate('Signup')
  }
  
  const onSignIn = () => {
    navigation.navigate('Signin')
  }

  return (
    <View style={styles.titleContainer}>
        <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splash_image.png")} /> 
        <Text style={styles.title}>You’ll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need </Text> 
        <Text style={styles.title}>Here!</Text>

        <Button onPress={onSignUp} title="Sign Up" />
        
        <Pressable onPress={onSignIn} hitSlop={20}>
            <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
    </View>
  )
}
export default Splash;