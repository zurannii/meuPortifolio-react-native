import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import SobreMimScreen from '../screens/SobreMimScreen';
import ProfissionalScreen from '../screens/ProfissionalScreen';
import AcademicoScreen from '../screens/AcademicoScreen';
import ProjetosScreen from '../screens/ProjetosScreen';
import { useTheme } from '../context/ThemeContext';
import ThemeToggleButton from '../components/ThemeToggleButton';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.cardBackground, 
        },
        headerTintColor: colors.primaryText, 
        headerTitleStyle: {
          color: colors.primaryText,
        },
        headerRight: () => <ThemeToggleButton />, 
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Meu Portfólio' }}
      />
      <Stack.Screen 
        name="SobreMim" 
        component={SobreMimScreen} 
        options={{ title: 'Sobre Mim' }}
      />
      <Stack.Screen 
        name="Profissional" 
        component={ProfissionalScreen} 
        options={{ title: 'Profissional' }}
      />
      <Stack.Screen 
        name="Academico" 
        component={AcademicoScreen} 
        options={{ title: 'Acadêmico' }}
      />
      <Stack.Screen 
        name="Projetos" 
        component={ProjetosScreen} 
        options={{ title: 'Projetos' }}
      />
    </Stack.Navigator>
  );
}