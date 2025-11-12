import React, { useMemo } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { useTheme } from '../context/ThemeContext';

const academicData = [
    {
        title: 'Sistemas para Internet',
        institution: 'Universidade Católica de Pernambuco',
        description: 'Formação voltada para desenvolvimento web e design responsivo.'
    },
    {
        title: 'Design Gráfico',
        institution: 'Universidade Católica de Pernambuco',
        description: 'Cursando Design Gráfico com ênfase em Experiência do Usuário e Interação Humano-Computador.'
    },
    {
        title: 'Design orientado a dados',
        institution: 'CESAR School',
        description: 'Aprendizado sobre processos criativos e uso de dados no design de produtos.'
    },
    {
        title: 'Aspire leaders Program',
        institution: 'Aspire Institute',
        description: 'Programa internacional de desenvolvimento de lideranças, voltado para jovens com potencial de impacto social.'
    },
    {
        title: 'Bootcamp User Experience ',
        institution: 'Avanti Academy',
        description: 'Cursando Design Gráfico com ênfase em Experiência do Usuário e Interação Humano-Computador.'
    },
    {
        title: 'PIBIC - Programa Institucional de Bolsas de Iniciação Científica',
        institution: 'Universidade Católica de Pernambuco',
        description: 'Cursando Design Gráfico com ênfase em Experiência do Usuário e Interação Humano-Computador.'
    },
]

export default function AcademicoScreen() {

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
        profileImage: {
            width: 130,
            height: 130,
            borderRadius: 65,
            borderWidth: 2,
            borderColor: colors.borderColor,
            marginBottom: 20,
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: colors.borderColor, 
            textAlign: 'center',
            marginBottom: 40,
        },
        cardContainer: {
            width: '100%',
            borderLeftWidth: 2,
            borderStyle: 'dotted',
            borderColor: colors.borderColor,
            paddingLeft: 30,
            marginLeft: 15,
        },
        timelineItem: {
            position: 'relative', 
            marginBottom: 30, 
        },
        itemStar: {
            position: 'absolute', 
            left: -(30 + (30 / 2)), 
            top: -3, 
            backgroundColor: colors.primaryDark, 
            width: 30, 
            height: 30,
            textAlign: 'center',
            lineHeight: 30,
        },
        timelineContent: {
            flex: 1,
        },
        timelineTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.primaryText,
            marginBottom: 5,
            lineHeight: 24, 
        },
       timelineInstitution: {
            fontSize: 14,
            fontWeight: '500',
            color: colors.secundaryText,
            marginBottom: 5,
        }, 	
        timelineDescription: {
            fontSize: 14,
            color: colors.terciaryText,
            lineHeight: 20,
        },
    }), [colors]);

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}>
                <Image style={styles.profileImage}
                        source={require('../../assets/rob-pixels.jpg')}
                                />

            <Text style={styles.title}>Jornada acadêmica e Certificações</Text>

            <View style={styles.cardContainer}>
                {academicData.map((item, index) => (
                    <View style={styles.timelineItem} key={index}>

                        <Image style={styles.itemStar} source={require('../../assets/star.png')}></Image>
                        <View style={styles.timelineContent}>
                            <Text style={styles.timelineTitle}>{item.title}</Text>
                            <Text style={styles.timelineInstitution}>{item.institution}</Text>
                            <Text style={styles.timelineDescription}>{item.description}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}