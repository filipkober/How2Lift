import { Exercise } from './../../types/exercise';

import { NavigatorScreenParams } from '@react-navigation/native';

export type TabsParamList = {
    Exercises: undefined;
    Muscles: undefined;
    Scan: undefined;
    Search: undefined;
    Settings: undefined;
    PrivacyPolicy: undefined;
    Exercise: { exercise: Exercise };
};

export type RootParamList = {
  '(tabs)': NavigatorScreenParams<TabsParamList>;
  LoadingPage: undefined;
  Exercise: { exerciseId: number };
};
