import React, { Component } from 'react'
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native'




export default function Video({ url }) {
    var { height, width } = Dimensions.get('window');
    return (
        <WebView
            source={{ uri: url }}
            style={{ marginTop: 0, height: Dimensions.get('window').height, width: Dimensions.get('window').width, flex: 1 }}
        />
    )
}

Video.propTypes = {
    url: PropTypes.string.isRequired
}


