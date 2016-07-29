import React, { Component } from 'react';
import {
    ListView,
} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Text, Icon } from 'native-base';

export default class DynamicListExample extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can']),
        };
    }

    render() {
        return (
            <Container>
                <Header>

                    <Title>Second</Title>

                </Header>
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Card>
                            <CardItem>
                                <Icon name="logo-google" />
                                <Text>{rowData}</Text>
                            </CardItem>
                        </Card>
                        }
                        />
                </Content>
            </Container>
        );
    }
}