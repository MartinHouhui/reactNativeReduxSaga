import React from 'react';
import { Container, Header, Title, Content } from 'native-base';

import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import SecondPageComponent from './SecondPageComponent';

class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.jumpForward()
        }
    }
    render() {
        return (

            <Container>
                <Header>

                    <Title>First</Title>

                </Header>
                <Content >
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this._pressButton.bind(this) }>
                            <Text>点我跳转</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.dispatch({ type: 'increant' })
                        } }>
                            <Text>{this.props.state.counter}</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect(state => {
    return {
        state: state.test
    }
}
)(FirstPageComponent);