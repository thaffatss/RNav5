import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


function TabHomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>TAB HOME!</Text>
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

export default TabHomeScreen;