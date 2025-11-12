import React, { useMemo } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { useTheme } from '../context/ThemeContext';

const professionalData = [
  {
    title: 'Design Gráfico & UI/UX',
    institution: 'Freelancer',
    description: 'Criação de identidades visuais e interfaces centradas no usuário.'
  },
  {
    title: 'Estagio em suporte técnico',
    institution: 'Universidade Católica de Pernambuco',
    description: 'Formação voltada para desenvolvimento web e design responsivo.'
  },
  {
     title: 'Designer e Staff',
     institution: 'ByteGirls',
     description: 'Atuação na identidade visual da comunidade e co-organização de eventos.'
   },
  {
    title: 'UI Design & Dev Front-End',
    institution: 'SportHubs',
    description: 'Programa internacional de desenvolvimento de lideranças, voltado para jovens com potencial de impacto social.'
  },
  {
    title: 'Residente Tecnológico',
    institution: 'Porto Digital',
    description: 'Cursando Design Gráfico com ênfase em Experiência do Usuário e Interação Humano-Computador.'
  },
]

export default function ProfissionalScreen() {

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
      fontSize: 20,
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

      <Text style={styles.title}>Jornada Profissional</Text>

      <View style={styles.cardContainer}>
        {professionalData.map((item, index) => (
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