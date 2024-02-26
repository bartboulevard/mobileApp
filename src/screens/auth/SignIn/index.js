import React, {useState, useContext} from "react";
import {View, Text} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {SafeAreaView} from "react-native-safe-area-context";
import {UserContext} from "../../../../App";

const SignIn = ({navigation}) => {
    const [values, setValues] = useState({})
    const {user, setUser} = useContext(UserContext)

    const onBack = () => {
        navigation.goBack()
    }

    const onSignUp = () => {
        navigation.navigate('Signup')
    }

    const onChange = (value, key) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSignIn = () => {
        console.log('login values => ', values )
        if(!values?.email || !values?.password) {
            alert.alert('Please fill in all fields')
            return
        }
        axios.post('https://api.com/signin', values)
        .then(async (response) => {
            console.log(response?.data?.accessToken)
            const accessToken = response?.data?.accessToken
            setUser({accessToken})

            if (response?.data?.token) {
                await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
            }
        })
        .catch(error => {
            console.log('login error => ', error.response.data);
        })
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input values={values.email} onChangeText={(v) => onChange('email', v)} label="Email" placeholder="someone@example.gmail.com" />
            <Input values={values.password} onChangeText={(v) => onChange('password', v)} isPassword label="Password" placeholder="*******" />
            <Button style={styles.button} title="Sign In" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
        </SafeAreaView>
    )
}
export default SignIn;