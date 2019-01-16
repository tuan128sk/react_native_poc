import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styleConfig = {
    slider: {
        flex: .6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '15%',
    },
};

export const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titlePartition: {
        backgroundColor: 'grey',
    },
    linearGradientHeader: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: height/3,
    },
    linearGradientSub: {
        flex: 1,
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: 5,
        height: height/6,
    },
    linearGradientCard: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        // height: height/3,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    imageCarousel: {
        height: 36,
        width: 25,
        position: 'absolute',
        left: 0,
        alignSelf: 'flex-start',
        marginLeft: '2%',
        marginTop: '2%',
        backgroundColor: 'transparent'
    },
    swiperContainer: {

    },
    slide1: {
        flex: styleConfig.slider.flex,
        justifyContent: styleConfig.slider.justifyContent,
        alignItems: styleConfig.slider.alignItems,
        paddingBottom: styleConfig.slider.marginBottom,
        borderRadius: 6
        // backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: styleConfig.slider.flex,
        justifyContent: styleConfig.slider.justifyContent,
        alignItems: styleConfig.slider.alignItems,
        paddingBottom: styleConfig.slider.marginBottom,
        // backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: styleConfig.slider.flex,
        justifyContent: styleConfig.slider.justifyContent,
        alignItems: styleConfig.slider.alignItems,
        paddingBottom: styleConfig.slider.marginBottom,
        // backgroundColor: '#92BBD9',
    },
    textCarModel: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '18%',
        marginLeft: '2%',
        position: 'absolute',
        left: 0,
    },
    textPlate: {
        color: 'black',
        fontSize: 15,
        marginTop: '23%',
        marginLeft: '2%',
        position: 'absolute',
        left: 0,
    },
    textCardTopic: {
        position: 'absolute',
        right: 0, marginTop: '2%',
        marginRight: '2%',
        fontSize: 33,
        fontWeight: 'bold',
    }
});
