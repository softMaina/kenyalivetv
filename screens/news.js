import React, { Component } from 'react'
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import axios from 'axios';


export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: ''
        }
    }

    async componentDidMount() {
        await this.fetchNews();

    }

    fetchNews() {
        axios.get('http://fetchnews.us-east-2.elasticbeanstalk.com/').then((response) => {
            this.setState({
                news: response.data
            })
            console.log(response.data)
        })
        return true;
    }

    renderItem = ({ item }) => {
        return (
            <List.Item
                title={item.title}
                // subTitle={item.pubDate}
                description={item.pubDate}
                left={props => <List.Icon {...props} icon="folder" />}
            />
        )
    }

    keyExtractor = (item, index) => index.toString();

    render() {
        const items = this.state.news
        return (
            <ScrollView>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={items}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        )
    }
}
