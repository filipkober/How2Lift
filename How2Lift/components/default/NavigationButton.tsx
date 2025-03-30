import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type RootStackParamList = {
  [key: string]: undefined;
};

interface Props {
    screenName: string;
    text: string;
    textStyle: string;
    className?: string;
}



const styles = StyleSheet.create({
  navigationButtonContainer: {
    borderWidth: 1,
    borderColor: "#ADB5BD",
    borderRadius: 10,
    boxShadow: "0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)",
    borderStyle: "solid"
  },
  navigationButton: {
    borderRadius: 10
  }
})

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export default function NavigationButton({ screenName, text, textStyle, className }: Props) {

    const navigation = useNavigation<NavigationProp>();

  return (
    <View className={`w-[36rem] ${className}`} style={[styles.navigationButtonContainer]}>
        <Pressable onPress={() => navigation.navigate(screenName)} className="p-2 flex flex-row items-center bg-white" android_ripple={{color: "gray"}} style={[styles.navigationButton]}>
            <Text className={`h-full ${textStyle}`}>{text}</Text>
            <MaterialCommunityIcons name="chevron-right" size={48} color="black" className="ml-auto" />
        </Pressable>
    </View>
  )
}
