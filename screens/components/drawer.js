import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class drawer extends Component {
    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.screenContainer}>

                    {/* Dashboard */}
                    {/* playlist-music-outline */}
                    {/* newspaper */}
                    <TouchableOpacity
                        onPress={this.navigateToScreen('Channels')}
                        style={[
                            styles.wrapper,
                            this.props.activeItemKey == 'Channels'
                                ? styles.activeBackgroundColor
                                : null,
                        ]}>
                        <View style={styles.screenStyle}>
                            {/* icon space */}
                            <Icon
                                name="playlist-music-outline"
                                size={30}
                                color="red"
                                containerStyle={{ marginLeft: 20 }}
                            />
                            <Text
                                style={[
                                    styles.screenTextStyle,
                                    this.props.activeItemKey == 'Channels'
                                        ? styles.selectedTextStyle
                                        : null,
                                ]}
                            >
                                Channels
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.navigateToScreen('News')}
                        style={[
                            styles.wrapper,
                            this.props.activeItemKey == 'News'
                                ? styles.activeBackgroundColor
                                : null,
                        ]}>
                        <View style={styles.screenStyle}>
                            {/* icon space */}
                            <Icon
                                name="newspaper"
                                size={30}
                                color="red"
                                containerStyle={{ marginLeft: 20 }}
                            />
                            <Text
                                style={[
                                    styles.screenTextStyle,
                                    this.props.activeItemKey == 'News'
                                        ? styles.selectedTextStyle
                                        : null,
                                ]}
                            >
                                News
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
    },
    headerContainer: {
        height: '33%',
        backgroundColor: '#000',
        width: '100%',
        elevation: 9,
    },
    headerText: {
        color: '#fff8f8',
    },
    headerAvatar: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    screenContainer: {
        paddingTop: 40,
        margin: 0,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    screenTextStyle: {
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: '#DCDCDC',
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#fff',
    },
    activeBackgroundColor: {
        backgroundColor: 'blue',
    },
    wrapper: {

        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: '#f6dede',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
