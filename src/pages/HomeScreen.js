import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen(props) {
    const navigation = useNavigation();

    const [name, setName] = useState('');

    const handleSendButton = () => {
        navigation.navigate('About', {
            cor: name
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Olá Dev!</Text>
                <TextInput 
                    style={styles.input} 
                    value={name} 
                    onChangeText={t=>setName(t)} 
                />
            <Button title="Enviar" onPress={handleSendButton} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        width: 300,
        padding: 10,
        fontSize: 15,
        backgroundColor: '#DDD',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10
    }
});

export default HomeScreen;