import {React} from "react";
import {View, Text, Linking, Image, Pressable} from "react-native";
import { styles } from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import Button from "../../../components/Button";

const Settings = () => {
    const [editing, setEditing] = useState(false)
    const [values, setValues] = useState({name: "Robin Noormets", email: "user@mail.com"})

    const onChangeText = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onEditPress = () => {
        setEditing(true)
    }

    const onSave = () => {
        setEditing(false)
    }

    const onItemPress = () => {
        Linking.openURL('https://www.google.com')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Settings" />
            <View style={styles.container}>
                <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <Pressable onPress={onEditPress}>
                <Image style={styles.icon} source={require("../../../assets/edit.png")} />
                </Pressable>
                </View>
                <EditableBox label="Name" value="Robin Noormets" editable={editing}/>
                <EditableBox label="Email" value="User email" editable={editing}/>
                {editing ? (<Button style={styles.button} onPress={onSave} title="Save" />) : null}

                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy Policy" />
            </View>
        </SafeAreaView>
    )
}
export default Settings;