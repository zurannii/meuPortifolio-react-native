import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    SobreMim: undefined;
    Profissional: undefined;
    Academico: undefined;
    Projetos: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;