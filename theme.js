import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';

export default function Theme() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}
