import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, View } from "react-native";

interface Props {
    className?: string;
    size?: number;
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

export default function Checkbox({ className, size = 48, setChecked, checked }: Props) {

    const styles = StyleSheet.create({
        checkboxContainer: {
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            width: 150,
            marginTop: 5,
            marginInline: 5,
        },
        checkbox: {
            backgroundColor: "#227181",
            boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: "15%",
            transitionDuration: "120ms",
            transitionTimingFunction: "linear",
        },
        checkboxChecked: {
            backgroundColor: "#3ACAD4",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25), inset -2px -2px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: size * 0.15,
            transitionDuration: "120ms",
            transitionTimingFunction: "linear"
        },
        })

  return (
    <View className={`checkbox-container ${className}`}>
        <Pressable onPress={() => setChecked(!checked)}>
            <View className={"relative"} style={[{width: size, height: size}, checked ? styles.checkboxChecked : styles.checkbox]}>
                {checked && <MaterialCommunityIcons name="check" size={size} color="white" className="absolute -top-1" />}
            </View>
        </Pressable>
    </View>
    
  )
}
