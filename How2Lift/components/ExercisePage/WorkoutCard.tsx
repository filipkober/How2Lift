import React, { useState } from "react";
import {ExerciseLogItem, RepType, WeightData} from "../../types/exercise";
import { View, Text, Pressable } from "react-native";
interface Props {
    logItem: ExerciseLogItem
}
const WorkoutCard = ({logItem}:Props) => {
  const [showDetails, setShowDetails] = useState(false);
switch (logItem.repType) {
    case RepType.BODYWEIGHT:
        return (
            <Pressable onPress={() => setShowDetails(!showDetails)}>
                <View className="bg-white shadow-md rounded-xl p-4 w-80 border border-gray-300 cursor-pointer">
                <Text className="text-sm text-gray-600">{logItem.date.toLocaleDateString("pl-PL")}</Text>
                <Text className="text-lg font-semibold mt-1">{logItem.exerciseId}</Text>
                {showDetails && (
                <View className="flex items-end mt-2">
                  <Text className="text-2xl font-bold">{logItem.reps}x</Text>
                </View>
             )}
            </View>
            </Pressable> 
          );
    case RepType.TIME:
        return (
            <Pressable onPress={() => setShowDetails(!showDetails)}>
                <View className="bg-white shadow-md rounded-xl p-4 w-80 border border-gray-300 cursor-pointer">
                <Text className="text-sm text-gray-600">{logItem.date.toLocaleDateString("pl-PL")}</Text>
                <Text className="text-lg font-semibold mt-1">{logItem.exerciseId}</Text>
                {showDetails && (
                <View className="flex items-end mt-2">
                  <Text className="text-2xl font-bold">{logItem.duration}s</Text>
                </View>
             )}
            </View>
            </Pressable> 
          );
    case RepType.WEIGHT:
        return (
            <Pressable onPress={() => setShowDetails(!showDetails)}>
                <View className="bg-white shadow-md rounded-xl p-4 w-80 border border-gray-300 cursor-pointer">
                <Text className="text-sm text-gray-600">{logItem.date.toLocaleDateString("pl-PL")}</Text>
                <Text className="text-lg font-semibold mt-1">{logItem.exerciseId}</Text>
                {showDetails && (
                <View className="flex flex-row items-end mt-2">
                  <Text className="text-2xl font-bold">{logItem.reps}x</Text>
                  <Text className="text-2xl font-bold mx-2">{logItem.weight}</Text>
                  <Text className="text-xl text-gray-600">kg</Text>
                </View>
             )}
            </View>
            </Pressable> 
          );
}
};

export default WorkoutCard;