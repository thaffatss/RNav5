import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

function AboutScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    // Pega o state nome digitado na tela HomeScreen e armazena na VA name.
    // -? é usado para quando não for mandando nada por parametro, e caso não tenha enviado nada coloca um valor padão
    // Ex: Visitante.
    const name = route.params?.name ?? 'Visitante'; 

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text>TELA DE SOBRE: {name} </Text>
            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default AboutScreen;