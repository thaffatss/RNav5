import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function TabAboutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>TAB ABOUT!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabAboutScreen;