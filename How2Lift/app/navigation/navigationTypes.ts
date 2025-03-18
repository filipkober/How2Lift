
import { NavigatorScreenParams } from '@react-navigation/native';

export type TabsParamList = {
    Exercises: undefined;
    Muscles: undefined;
    Scan: undefined;
    Search: undefined;
    Settings: undefined;
    PrivacyPolicy: undefined;
};

export type RootParamList = {
  '(tabs)': NavigatorScreenParams<TabsParamList>;
  LoadingPage: undefined;
};
