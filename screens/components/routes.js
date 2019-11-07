import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Channels from '../channels'
import Tv from '../tv'
import News from '../news';
import Story from '../story';
import Drawer from './drawer';
import { IconButton, Colors } from 'react-native-paper';

const ChannelScreen = createStackNavigator(
    {
        Channel: {
            screen: Channels,
            navigationOptions: ({ navigation }) => ({
                title: 'Channels',
                headerLeft: () => (
                    <IconButton
                        icon="menu"
                        color={Colors.blue500}
                        size={35}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }),

        },
        Tv: {
            screen: Tv,
            navigationOptions: ({ navigation }) => ({
                title: 'Watching'
            }),
        }
    },
    {
        initialRouteName: 'Channel',
    }
)
const NewScreen = createStackNavigator(
    {
        News: {
            screen: News,
            navigationOptions: ({ navigation }) => ({
                title: 'News',
                headerLeft: () => (
                    <IconButton
                        icon="menu"
                        color={Colors.blue500}
                        size={35}
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }),
        },
        Story: {
            screen: Story,
            navigationOptions: ({ navigation }) => ({
                title: 'Channels'
            }),
        }
    },
    {
        initialRouteName: 'News'
    }
)

const LiveTv = createDrawerNavigator(
    {
        Channels: ChannelScreen,
        News: NewScreen
    },
    {
        initialRouteName: 'Channels',
        contentComponent: Drawer,
    },
)

export const AppContainer = createAppContainer(LiveTv);
