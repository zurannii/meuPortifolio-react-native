import React, { useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking
} from "react-native";
import { NavigationProp } from "../navigation/types"; 
import { useTheme } from '../context/ThemeContext';

type Props = {
    navigation: NavigationProp;
};

export default function HomeScreen({ navigation }: Props) {

    const { colors } = useTheme();

    const styles = useMemo(() => StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.primaryDark,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        paddingTop: 60,
        backgroundColor: colors.primaryDark,
    },
    nameText: {
        fontSize: 16,
        color: colors.primaryText,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: colors.primaryText,
    },
    subtitle: {
        fontSize: 18,
        color: colors.secundaryText,
        textAlign: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: colors.borderColor,
        borderWidth: 2,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 30,
    },
    socialIcon: {
        width: 40, 
        height: 40,
        resizeMode: 'contain', 
    },
    navigationContainer: {
        width: '100%',
        gap: 20,
        alignItems: 'center',
    },
    navButton: {
        width: '100%',
        backgroundColor: colors.cardBackground,
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.borderColor,
        borderStyle: 'dotted',
    },
    navTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primaryText,
        marginBottom: 5,
    },
    navSubtitle: {
        fontSize: 14,
        color: colors.secundaryText,
        lineHeight: 20,
    },
}), [colors]);

    return (
        <ScrollView
            style={styles.scrollView} 
            contentContainerStyle={styles.container}>

            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/rob-pixels.jpg')}
                    style={styles.profileImage}
                />
                
                <Text style={styles.nameText}>Roberta Nascimento</Text>
                <Text style={styles.subtitle}>UI/UX Designer & Developer</Text>
            
            </View> 

            <View style={styles.socialContainer}>
    
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/zurannii/')}>
                    <Image 
                        source={require('../../assets/instagram-icon.png')} 
                        style={styles.socialIcon} 
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/zurannii/')}>
                    <Image 
                        source={require('../../assets/linkedin-icon.png')} 
                        style={styles.socialIcon} 
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/zurannii/')}>
                    <Image 
                        source={require('../../assets/github-icon.png')} 
                        style={styles.socialIcon} 
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.navigationContainer}>

                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('SobreMim')}>

                    <Text style={styles.navTitle}>Sobre Mim</Text>
                    <Text style={styles.navSubtitle}>Conheça mais sobre a minha trajetória e essência</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Profissional')}
                >
                    <Text style={styles.navTitle}>Profissional</Text>
                    <Text style={styles.navSubtitle}>Caminhos e experiências que moldaram minha carreira.</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Academico')}
                >
                    <Text style={styles.navTitle}>Acadêmico</Text>
                    <Text style={styles.navSubtitle}>Minha jornada de aprendizado e evolução.</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Projetos')}
                >
                    <Text style={styles.navTitle}>Projetos</Text>
                    <Text style={styles.navSubtitle}>Criações e ideias que transformei em realidade.</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}