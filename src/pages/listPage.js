import React, { Component } from 'react';
import { Badge, Container, Header, Title, Content, Card, CardItem, Text, Icon, List, ListItem } from 'native-base';

export default class DynamicListExample extends Component {
    render() {

        var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

        return (
            <Container>
                <Header>

                    <Title>list</Title>

                </Header>
                <Content>
                    <List>
                        <ListItem iconLeft>
                            <Icon name="ios-chatboxes" />
                            <Text>Simon Mignolet</Text>
                        </ListItem>

                        <Card>
                            <CardItem>
                                <Icon name="logo-google" />
                                <Text>Google</Text>
                            </CardItem>
                        </Card>
                        <ListItem iconLeft>
                            <Icon name="ios-notifications" />
                            <Text>Dejan Lovren</Text>
                            <Text note>Note here</Text>
                        </ListItem>
                        <ListItem iconLeft iconRight>
                            <Icon name="ios-mic" />
                            <Text>Mama Sakho</Text>
                            <Icon name="ios-mic-outline" />
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}