import React, { Component } from 'react'
import YouTube from 'react-native-youtube';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default function youtube({ url }) {
    return (
        <YouTube
            apiKey="AIzaSyD_a2HlR9UW1hYskAIdUuaWcsUhJbNjkiY"
            videoId={url} // The YouTube video ID
            play // control playback of video with true/false
            fullscreen // control whether the video should play in fullscreen or inline
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
            showInfo={false}
            modestbranding={false}
            controls={2}
        />
    )
}


youtube.propTypes = {
    url: PropTypes.string.isRequired
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});