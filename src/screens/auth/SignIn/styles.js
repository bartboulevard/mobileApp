import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/MobileApp/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: "100%",
        flexDirection: "column",
        borderWidth: 1
    },
    agreeRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    agreeText: {
        marginHorizontal: 14,
        color: colors.blue,
    },
    agreeTextBold: {
        fontWeight: "bold",
    },
    button: {
        marginVertical: 20,
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
});        