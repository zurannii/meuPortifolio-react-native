import React from "react";
import { View,
         Text,
         StyleSheet,
         Button, 
         Image,
         TouchableOpacity,
         ScrollView
         } from "react-native";
import { NavigationProp } from "../navigation/types";
import { COLORS } from '../styles/theme';

type Props = {
    navigation: NavigationProp;
};


export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Home</Text>

            <Button title="Ir para Sobre Mim" onPress={() => navigation.navigate("SobreMim")} />
            <Button title="Ir para Profissional" onPress={() => navigation.navigate("Profissional")} />
            <Button title="Ir para Acadêmico" onPress={() => navigation.navigate("Academico")} />
            <Button title="Ir para Projetos" onPress={() => navigation.navigate("Projetos")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
        textAlign: 'center',
    },
});


