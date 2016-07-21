import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if(index==0){
            return null;
        }
        return (
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}
                onPress={() => navigator.jumpBack() }>
                <Text style={{ color: 'white', margin: 5, }}>
                    返回
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'white', margin: 5, fontSize: 16 }}>
                    主页
                </Text>
            </TouchableOpacity>
        );
    }
}

export default NavigationBarRouteMapper;