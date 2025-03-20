import { useState } from "react";
import "../../styles/Checkbox.css"
import { Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
    className?: string;
    size?: number;
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

export default function Checkbox({ className, size = 48, setChecked, checked }: Props) {

  return (
    <View className={`checkbox-container ${className}`}>
        <Pressable onPress={() => setChecked(!checked)}>
            <View className={checked ? "checkbox-checked relative" : "checkbox relative"} style={{width: size, height: size}}>
                {checked && <MaterialCommunityIcons name="check" size={size} color="white" className="absolute -top-1" />}
            </View>
        </Pressable>
    </View>
    
  )
}
