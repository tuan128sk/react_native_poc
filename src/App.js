import React from 'react';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import {CarPaymentScreen} from "./screens/main/CarPaymentScreen";
import Swiper1 from "./screens/main/test1"


const AppNavigator = createBottomTabNavigator({
    Feed: {
        screen: Swiper1,
    },
    Bill: {
        screen: CarPaymentScreen,
    },
    CarPayment: {
        screen: CarPaymentScreen,
    },
    Promotion: {
        screen: CarPaymentScreen,
    },
    Others: {
        screen: CarPaymentScreen,
    },
}, {
    initialRouteName: 'CarPayment',
});


export default createAppContainer(AppNavigator);