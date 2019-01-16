import React from "react";
import {Text, SafeAreaView, View, ScrollView, Image, Button} from "react-native";
import {styles} from "../../styles/CarPaymentScreenStyle";
import {Container, Content} from 'native-base';
import LinearGradient from "react-native-linear-gradient";
import Swiper from 'react-native-swiper';

export class CarPaymentScreen extends React.Component {

    getSlider = (carDetail) => {
        return <LinearGradient
            style={styles.slide1}
            start={{x: 1, y: 1}} end={{x: -1, y: -1}} colors={['#A2D5EF', '#E9F4F8']}
            key={carDetail.key}
            // start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#A2D5EF', '#DAEDF6']}
        >
            <Image
                source={require('../../static/images/Tisco_logo.png')}
                style={styles.imageCarousel}
            />
            <Text
                style={styles.textCardTopic}
            >ออโต้ การ์ด
            </Text>
            <Text style={styles.textCarModel}>{carDetail.carModel}</Text>
            <Text style={styles.textPlate}>{carDetail.plate}</Text>

            <Image
                source={require('../../static/images/Text-Pattern-AutoCard.png')}
                style={{flex: 1, position: 'absolute'}}
            />
        </LinearGradient>
    };

    render() {
        let swiperTexts = ['โตโยต้า ไฮลัก วีโก้', 'Beautiful', 'And Simple'];
        let cars = [
            {
                carModel: 'โตโยต้า ไฮลัก วีโก้',
                plate: '1กฟ-1235 \n กรุงเทพมหานคร',
                key: 1,
            },
            {
                carModel: 'โตโยต้า ไฮลัก วีโก้',
                plate: '1กฟ-1235 \n กรุงเทพมหานคร',
                key: 2,
            },
            {
                carModel: 'โตโยต้า ไฮลัก วีโก้',
                plate: '1กฟ-1235 \n กรุงเทพมหานคร',
                key: 3,
            },
        ];
        return (
            <Container>
                <Content style={{marginTop: '5%'}}>
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 3}} colors={['#283D7C', '#4098CA']}
                        style={styles.linearGradientHeader}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            My Car
                        </Text>
                        <Swiper
                            style={styles.swiperContainer}
                            loop={false}
                        >
                            {cars.map((carDetail) => {
                                return this.getSlider(carDetail)
                            })}
                        </Swiper>
                    </LinearGradient>
                    <LinearGradient
                        start={{x: 0, y: 1}} end={{x: 0, y: -1}} colors={['#3565A6', '#60A5D0']}
                        style={styles.linearGradientSub}
                    >
                        <Text
                            style={styles.titlePartition}
                        >
                            'mamamia'
                        </Text>
                    </LinearGradient>
                    <Button
                        testID={'masterB'}
                        title={"click me master!!!"}
                        onPress={() => alert('yoyo!', 'yoyo1')}
                    >
                    </Button>
                </Content>
            </Container>
        )

    }
}

