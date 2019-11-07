import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native';

export default class Story extends Component {
    render() {
        return (
            <ScrollView>
                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>

                </Card>
            </ScrollView>
        )
    }
}
