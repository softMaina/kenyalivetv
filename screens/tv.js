import React, { Component } from 'react'
import Youtube from './components/youtube';
import Video from './components/videos';

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
        if (item.typee === 1) { //youtube link
            console.log(item)
            this.setState({
                type: 1,
                url: item.link
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
            return <Youtube url={this.state.url} />
        } else {
            return <Video url={this.state.url} />
        }
    }
}
