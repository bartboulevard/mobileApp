import {StyleSheet} from 'react-native';

import {colors} from '/Users/student/MobileApp/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontweight: '500'
    },
    eye: {
        height: 24,
        width: 24,
        marginHorizontal: 16
    }
});