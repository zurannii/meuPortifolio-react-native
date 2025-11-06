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

const academicData = [
    {
        title: 'Sistemas para Internet',
        institution: 'Universidade Católica de Pernambuco',
        description: 'Formação voltada para desenvolvimento web e design responsivo.'
    },
    {
        title: 'Design Gráfico',
        institution: 'Anhanguera Educacional',
        description: 'Cursando Design Gráfico com ênfase em Experiência do Usuário e Interação Humano-Computador.'
    },
    {
        title: 'Design Design orientado a dados',
        institution: 'CESAR School',
        description: 'Aprendizado sobre processos criativos e uso de dados no design de produtos.'
    },
    {
        title: 'Aspire leaders Program',
        institution: 'Aspire Institute',
        description: 'Programa internacional de desenvolvimento de lideranças, voltado para jovens com potencial de impacto social.'
    },
    {
        title: 'Design Gráfico',
        institution: 'Universidade Católica de Pernambuco',
        description: 'Cursando Design Gráfico com ênfase em Experiência do Usuário e Interação Humano-Computador.'
    },

]

export default function AcademicoScreen() {
    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}>s
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
                            <Text style={styles.timelineDescription}>{item.description}</Text>
                        </View>
                    </View>
                ))}
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
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.borderColor, 
    textAlign: 'center',
    marginBottom: 40,

  },
  cardContainer: {
    width: '100%',
    borderLeftWidth: 2,
    borderStyle: 'dotted',
    borderColor: COLORS.borderColor,
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
    backgroundColor: COLORS.primaryDark, 
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
    color: COLORS.primaryText,
    marginBottom: 5,
    lineHeight: 24, 

  },
  timelineDescription: {
    fontSize: 14,
    color: COLORS.primaryText,
    lineHeight: 20,
  },
});