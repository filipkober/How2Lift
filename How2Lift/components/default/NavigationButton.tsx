import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import "../../styles/NavigationButton.css";

type RootStackParamList = {
  [key: string]: undefined;
};

interface Props {
    screenName: string;
    text: string;
    textStyle: string;
    className?: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export default function NavigationButton({ screenName, text, textStyle, className }: Props) {

    const navigation = useNavigation<NavigationProp>();

  return (
    <View className={`w-[36rem] navigation-button-container ${className}`}>
        <Pressable onPress={() => navigation.navigate(screenName)} className="p-2 flex flex-row items-center bg-white navigation-button" android_ripple={{color: "gray"}}>
            <Text className={`h-full ${textStyle}`}>{text}</Text>
            <MaterialCommunityIcons name="chevron-right" size={48} color="black" className="ml-auto" />
        </Pressable>
    </View>
  )
}
