import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { NavigationProp } from "../navigation/types";
import { COLORS } from '../styles/theme';

export default function SobreMimScreen() {
    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}>
            <Image style={styles.profileImage}
                source={require('../../assets/rob-pixels.jpg')}
            />

            <Text style={styles.title}>Sobre Mim</Text>
            <Text style={styles.paragraph}>
                UI/UX Designer e desenvolvedora com foco em criar
                experiências digitais acessíveis, funcionais e
                emocionalmente envolventes.
            </Text>
            <Text style={styles.paragraph}>
                Minha atuação une design, tecnologia e empatia, buscando
                sempre compreender o usuário para transformar ideias em
                soluções visuais que gerem impacto real.
            </Text>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>O que me move:</Text>
                    <Text style={styles.cardText}>Criatividade, empatia, impacto social.</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Minhas ferramentas:</Text>
                    <Text style={styles.cardText}>Figma, React, Notion, VSCode.</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Minha missão:</Text>
                    <Text style={styles.cardText}>Usar o design e a tecnologia para iluminar caminhos.</Text>
                </View>
            </View>

            <View style={styles.idiomasContainer}>
                <Text style={styles.idiomasTitle}>Idiomas:</Text>

                <View style={styles.idiomaItem}>
                    <Text style={styles.idiomaIcon}>★</Text>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Inglês:</Text> Intermediário</Text>
                </View>

                <View style={styles.idiomaItem}>
                    <Text style={styles.idiomaIcon}>★</Text>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Espanhol:</Text> Intermediário</Text>
                </View>

                <View style={styles.idiomaItem}>
                    <Text style={styles.idiomaIcon}>★</Text>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Italiano:</Text> Básico</Text>
                </View>

                <View style={styles.idiomaItem}>
                    <Text style={styles.idiomaIcon}>★</Text>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Português:</Text> Nativo</Text>
                </View>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: COLORS.primaryDark,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.primaryDark,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: COLORS.primaryText,
    },
    paragraph: {
        fontSize: 16,
        color: COLORS.primaryText,
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 25,
        maxWidth: '95%',
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: COLORS.borderColor,
        borderWidth: 2,
        marginBottom: 20,
    },
    cardContainer: {
        width: '100%',
        backgroundColor: COLORS.cardBackground,
        gap: 15,
        marginVertical: 20,
    },
    card: {
        width: '100%',
        backgroundColor: COLORS.cardBackground,
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.borderColor,
        borderStyle: 'dotted',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primaryText,
        marginBottom: 8,
    },
    cardText: {
        fontSize: 16,
        color: COLORS.primaryText,
    },
    idiomasContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    idiomasTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primaryText,
        marginBottom: 10,
    },
    idiomaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    idiomaIcon: {
        width: 19,
        height: 18,
        marginRight: 10,
        color: COLORS.primaryText,
    },
    idiomaText: {
        fontSize: 16,
        color: COLORS.primaryText,
    },
    bold: {
        fontWeight: 'bold',
    },
});