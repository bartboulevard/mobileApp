import React, {useContext, useState} from "react";
import {View, Text} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Checkbox from "../../../components/Checkbox";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {SafeAreaView} from "react-native-safe-area-context";
import {UserContext} from "../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const [values, setValues] = useState({})
    const {user, setUser} = useContext(UserContext)

    const onBack = () => {
        navigation.goBack()
    }

    const onSignin = () => {
        navigation.navigate('Signin')
    }

    const onChange = (value, key) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = () => {
        if(!values?.fullName || !values?.email || !values?.password) {
            alert.alert('Please fill in all fields')
            return
        }
        if(!checked) {
            alert.alert('Please agree to the terms of service and privacy policy')
            return
        }

        axios.post('https://api.com/signup', values)
        .then(response => {
            console.log('signup => ', response);
            const {email, password} = values
            axios.post('https://api.com/signin', values)
            .then(async (response) => {
                console.log('signin => ', response);
                const accessToken = response?.data?.accessToken
                console.log(accessToken)
                setUser({accessToken})
                if (response?.data?.token) {
                    await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
                }
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up" />
            <Input value={values.fullName} onChangeText={(v) => onChange('fullName', v)} label="Name" placeholder="John Die" />
            <Input value={values.email} onChangeText={(v) => onChange('email', v)} label="Email" placeholder="someone@example.gmail.com" />
            <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword label="Password" placeholder="*******" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree to the <Text style={styles.agreeTextBold}>Terms of Service</Text> and <Text style={styles.agreeTextBold}>Privacy Policy</Text></Text>
            </View>
            <Button onpress={onSubmit} style={styles.button} title="Sign Up" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
        </SafeAreaView>
    )
}
export default Signup;