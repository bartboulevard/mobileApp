import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '/Users/student/MobileApp/utils/colors.js';


const {width} = Dimensions.get('window');
console.log('width => ', width)

export const styles = StyleSheet.create({
    container: {
        margin: 8,

    },
    title: {
        paddingVertical: 8,
        color: colors.textGray
    },
    image: {
        width: ( width - 76) / 2,
        height: 220,
        borderRadius: 8
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    }
});