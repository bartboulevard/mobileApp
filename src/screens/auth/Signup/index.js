import React, {useState} from "react";
import {View, Text} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Checkbox from "../../../components/Checkbox";
import { styles } from "./styles";
import Input from "../../../components/Input";

const Signup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Robin Noormets" />
            <Input label="Email" placeholder="someone@example.gmail.com" />
            <Input isPassword label="Password" placeholder="*******" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree to the Terms of Service and Privacy Policy</Text>
            </View>
        </View>
    )
}
export default Signup;