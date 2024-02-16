import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/MobileApp/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.black,
    },
    icon: {
        width: 24,
        height: 24
    },
    space: {
        width: 24
    }   
});