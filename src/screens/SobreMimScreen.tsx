import React, { useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { useTheme } from '../context/ThemeContext';

export default function SobreMimScreen() {

    const { colors } = useTheme();

    const styles = useMemo(() => StyleSheet.create({
        scrollView: {
            flex: 1,
            backgroundColor: colors.primaryDark,
        },
        container: {
            flexGrow: 1,
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: colors.primaryDark,
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            color: colors.primaryText,
        },
        paragraph: {
            fontSize: 16,
            color: colors.secundaryText,
            textAlign: 'center',
            marginBottom: 15,
            lineHeight: 25,
            maxWidth: '95%',
        },
        profileImage: {
            width: 130,
            height: 130,
            alignItems: 'center',
            borderRadius: 65,
            borderColor: colors.borderColor,
            borderWidth: 2,
            marginBottom: 20,
        },
        cardContainer: {
            width: '100%',
            gap: 15,
            marginVertical: 20,
        },
        card: {
            width: '100%',
            backgroundColor: colors.cardBackground,
            padding: 20,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.borderColor,
            borderStyle: 'dotted',
        },
        cardTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primaryText,
            marginBottom: 8,
        },
        cardText: {
            fontSize: 16,
            color: colors.secundaryText,
        },
        idiomasContainer: {
            width: '100%',
            marginTop: 30,
            alignItems: 'flex-start',
        },
        idiomasTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primaryText,
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
            tintColor: colors.primaryText,
        },
        idiomaText: {
            fontSize: 16,
            color: colors.secundaryText,
        },
        bold: {
            fontWeight: 'bold',
        },
    }), [colors]);

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
            
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Minhas ferramentas e tecnologias:</Text>
                    <Text style={styles.cardText}>Figma, Notion, VSCode, React, Typescript, Javascript.</Text>
                </View>
            
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Minha missão:</Text>
                    <Text style={styles.cardText}>Usar o design e a tecnologia para iluminar caminhos.</Text>
                </View>
            </View>

            <View style={styles.idiomasContainer}>
                <Text style={styles.idiomasTitle}>Idiomas:</Text>

                <View style={styles.idiomaItem}>
                    <Image style={styles.idiomaIcon} 
                     source={require('../../assets/small-star.png')}/>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Inglês:</Text> Intermediário</Text>
                </View>

                <View style={styles.idiomaItem}>
                    <Image style={styles.idiomaIcon} 
                     source={require('../../assets/small-star.png')}/>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Espanhol:</Text> Intermediário</Text>
                </View>

                <View style={styles.idiomaItem}>
                    <Image style={styles.idiomaIcon} 
                     source={require('../../assets/small-star.png')}/>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Italiano:</Text> Básico</Text>
                </View>

                <View style={styles.idiomaItem}>
                    <Image style={styles.idiomaIcon} 
                     source={require('../../assets/small-star.png')}/>
                    <Text style={styles.idiomaText}><Text style={styles.bold}>Português:</Text> Nativo</Text>
                </View>
            </View>


        </ScrollView>
    );
}