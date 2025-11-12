import React, { useMemo } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image,
  TouchableOpacity, 
  Linking           
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

const projectsData = [
  {
    title: 'Blog Angular',
    description:
      'Aplicação de blog desenvolvida com Angular, inspirada no layout do Dribbble. Interface moderna e responsiva.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    github: 'https://github.com/zurannii/angular-blog.git',
  },
  {
    title: 'BuzzFeed com Angular',
    description:
      'Clone interativo do BuzzFeed desenvolvido em Angular, com sistema de perguntas e resultados personalizados.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    github: 'https://github.com/zurannii/BuzzFeed-com-Angular.git',
  },
  {
    title: 'Projeto Barbearia',
    description:
      'Website de barbearia com Angular, focado em exibir serviços, preços e agendamentos de forma intuitiva.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    github: 'https://github.com/zurannii/projeto-barbearia.git',
  },
  {
    title: 'API REST Node.js',
    description:
      'API RESTful desenvolvida com Node.js, Express e PostgreSQL para manipulação de dados e autenticação.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/zurannii/api-rest-nodejs.git',
  },
  {
    title: 'API REST Spring Boot (Railway)',
    description:
      'API Java hospedada na nuvem com Railway, utilizando Spring Boot 3, Java 17 e arquitetura REST.',
    technologies: ['Java', 'Spring Boot', 'Railway', 'Postman'],
    github:
      'https://github.com/zurannii/API-REST-na-Nuvem-Usando-Spring-Boot-3-Java-17-e-Railway.git',
  },
  {
    title: 'API Java com Maven',
    description:
      'API Java construída com Maven e Spring Boot, estruturada para escalabilidade e fácil manutenção.',
    technologies: ['Java', 'Maven', 'Spring Boot'],
    github: 'https://github.com/zurannii/API-Java-usando-Maven.git',
  },
];


export default function ProjetosScreen() {
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
      marginBottom: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.borderColor, 
      marginBottom: 30, 
    },
    cardContainer: {
      width: '100%',
      gap: 15,
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
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.primaryText, 
      marginBottom: 8,
    },
    cardText: {
      fontSize: 14, 
      color: colors.primaryText,
      lineHeight: 20,
    },
  }), [colors]);

  return (
    <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      
      <Image
        source={require('../../assets/rob-pixels.jpg')}
        style={styles.profileImage}
      />

      <Text style={styles.title}>Projetos</Text>

      <View style={styles.cardContainer}>
        
        {projectsData.map((project, index) => (
          <TouchableOpacity 
            style={styles.card} 
            key={index}
            onPress={() => Linking.openURL(project.github)}
          >
            <Text style={styles.cardTitle}>{project.title}</Text>
            <Text style={styles.cardText}>{project.description}</Text>
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>
  );
}