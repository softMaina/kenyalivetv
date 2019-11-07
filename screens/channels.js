import React, { Component } from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ads from './components/ads';


export default class channels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        }
    }

    async componentDidMount() {
        // Create a reference
        const ref = database().ref(`channelsNew`);
        // Fetch the data snapshot
        const snapshot = await ref.once('value');
        this.setState({
            channels: this.snapshotToArray(snapshot.val())
            // channels: snapshot.val()
        })
    }

    snapshotToArray = snapshot => Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

    renderItem = ({ item }) => {
        return (
            <Card>
                <Card.Title title={item.name} left={(props) => <Avatar.Icon {...props} icon="youtube-tv" />} />
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button style={{ width: '100%' }} mode="contained" icon="play-circle-outline"
                        onPress={() =>
                            this.props.navigation.navigate('Tv', { link: item })}>Watch</Button>
                </Card.Actions>
            </Card >
        )
    }

    keyExtractor = (item, index) => index.toString();

    render() {
        const items = this.state.channels;
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={items}
                    renderItem={this.renderItem}
                />
                <Ads />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
