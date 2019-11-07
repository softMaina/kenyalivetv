import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

export default function Ads() {
    return (
        <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.SMART_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
                console.log('Advert loaded');
            }}
        // onAdFailedToLoad((error) => {
        //     console.error('Advert failed to load: ', error);
        // })
        />
    );
}