import React from 'react';
import { View, Text, TabBarIOS, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ThirdPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: "default" };
    }

    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.jumpBack();
        }
    }

    _renderContent(category, title) {
        return (
            <View style={styles.tabContent}><Text>{title}</Text></View>
        );
    }

    render() {
        return (
            <TabBarIOS tintColor={"#ea4c89"}>
                <Icon.TabBarItem
                    title="All"
                    iconName="dribbble"
                    selectedIconName="dribbble"
                    selected={this.state.selectedTab === "default"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "default",
                        });
                    } }>
                    {this._renderContent("default", "All") }
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="Debuts"
                    iconName="trophy"
                    selectedIconName="trophy"
                    selected={this.state.selectedTab === "debuts"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "debuts",
                        });
                    } }>
                    {this._renderContent("debuts", "Debuts") }
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="Animated"
                    iconName="heart"
                    selectedIconName="heart"
                    selected={this.state.selectedTab === "animated"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "animated",
                        });
                    } }>
                    {this._renderContent("animated", "Animated") }
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="Rebounds"
                    iconName="lightbulb-o"
                    selectedIconName="lightbulb-o"
                    selected={this.state.selectedTab === "rebounds"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "rebounds",
                        });
                    } }>
                    {this._renderContent("rebounds", "Rebounds") }
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    tabContent: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
})