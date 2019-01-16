import React, {Component} from 'react';
import {
    Text,
    View,
    SafeAreaView
} from 'react-native';
import {styles} from '../../styles/test1Style';
import Swiper from 'react-native-swiper';


export default class Swiper1 extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={true}
                    loop={false}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </SafeAreaView>

        );
    }
}

