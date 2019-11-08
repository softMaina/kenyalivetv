import React, { Component } from 'react'
import Youtube from './components/youtube';
import Video from './components/videos';
import axios from 'axios';
import {View, Text} from 'react-native';
import YoutubePlayer from 'react-native-yt-player'

export default class tv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
            url: '',
            item: ''
        }
        this.checkLinkType = this.checkLinkType.bind(this)
    }

    componentDidMount() {
        let item = this.props.navigation.getParam('link');
        this.setState({
            item: item
        })
        this.checkLinkType(item)
    }

    checkLinkType(item) {
        if (item.type === 1) { //youtube link
            let uri = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + item.link + '&type=video&eventType=live&key=AIzaSyD_a2HlR9UW1hYskAIdUuaWcsUhJbNjkiY&part=status';
            axios.get(uri).then(response => {
                console.log(response)
                let data = response.data;
                if (data.items.length !== 0) {
                    let videoid = data.items[0].id.videoId;
                    console.log(videoid)
                    this.setState({
                        type: 1,
                        url: "jL8uDJJBjMA"
                    })
                }
            })

        } else {
            console.log(item)
            this.setState({
                type: 0,  //embedded videos link
                url: item.link
            })
        }
    }

    render() {
        if (this.state.type === 1) {
            // return <Youtube url={this.state.url} />
            return  <YoutubePlayer
            loop
            topBar={TopBar}
            videoId="Z1LmpiIGYNs"
            autoPlay
            onFullScreen={this.onFullScreen}
            onStart={() => console.log("onStart")}
            onEnd={() => alert("on End")}
          />
        } else {
            return <Video url={this.state.url} />
        }
    }
}

const TopBar = ({ play, fullScreen }) => (
    <View
      style={{
        alignSelf: "center",
        position: "absolute",
        top: 0
      }}
    >
      <Text style={{ color: "#FFF" }}> Custom Top bar</Text>
    </View>
);
