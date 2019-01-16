import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        flex: .3,
        height: height/3
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    textCarModel: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})