import { StyleSheet } from "react-native";

import { colors } from "/Users/student/MobileApp/utils/colors.js"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
})