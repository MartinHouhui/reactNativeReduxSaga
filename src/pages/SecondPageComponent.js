import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';


import { Container, Header, Title, Content, Card, CardItem, Text, Icon } from 'native-base';


import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {

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

                    <Title>Second</Title>

                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon name="logo-google" />
                            <Text>Google</Text>
                        </CardItem>
                    </Card>
                    <TouchableOpacity onPress={this._pressButton.bind(this) }>
                        <Card>
                            <CardItem>
                                <Icon name="logo-google" />

                                <Text>Google</Text>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}