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

type Props = {
    navigation: NavigationProp;
};


export default function HomeScreen({ navigation }: Props) {
    return (
        <ScrollView
            style={styles.ScrollView}
            contentContainerStyle={styles.container}>

            <View style={styles.profileContainer}>
               {/*  <Image
                    source={require('../assets/minhafotojája.jpg')}
                    style={styles.profileImage}
                /> */}

                <Text style={styles.nameText}>Roberta Nascimento</Text>
                <Text style={styles.subtitle}>UI/UX Designer & Developer</Text>

                <View style={styles.socialContainer}>
                    <View style={styles.socialIcon} />
                    <View style={styles.socialIcon} />
                    <View style={styles.socialIcon} />
                </View>
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

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: COLORS.primaryDark,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.primaryDark,
    },
    nameText: {
        fontSize: 16,
        color: COLORS.primaryText,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.secundaryText,
        textAlign: 'center',
        marginBottom: 20,
    },
    ScrollView: {
        flex: 1,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: COLORS.borderColor,
        borderWidth: 2,
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    socialIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: COLORS.borderColor,
    },
    navigationContainer: {
        width: '100%',
        gap: 15,
    },
    navButton: {
        width: '100%',
        backgroundColor: COLORS.cardBackground,
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.borderColor,
        borderStyle: 'dotted',
    },

    navTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primaryText,
        marginBottom: 5,
    },
    navSubtitle: {
        fontSize: 14,
        color: COLORS.secundaryText,
        lineHeight: 20,
    },
});
