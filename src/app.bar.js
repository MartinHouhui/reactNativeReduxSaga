import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    SegmentedControlIOS
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
            <View style={{ flex: 2, justifyContent: 'center',width:100 }}>
               <SegmentedControlIOS tintColor="#ff0000" values={['One', 'Two']} />
            </View>
        );
    }
}

export default NavigationBarRouteMapper;