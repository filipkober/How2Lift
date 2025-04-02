import { Exercise } from './../../types/exercise';

import { NavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native';

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
  Exercise: {
    exerciseId: number
  };
  Search: {
    muscleName: string
    muscleId: number
  };
};

export type SearchNavigationProp = NavigationProp<RootParamList, 'Search'>;
export type SearchRouteProp = RouteProp<RootParamList, 'Search'>;