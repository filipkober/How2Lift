import { Link } from "expo-router";
import React from "react";
import { ExerciseLogItem, RepType} from "../../types/exercise";
import WorkoutCard from "@/components/ExercisePage/WorkoutCard";
import { Button, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

const ExercisesPage = ({ navigation }: any) => {
  const exer_data: ExerciseLogItem  = {id:"1", repType: RepType.WEIGHT ,date: new Date("2024-09-14"), exerciseId: 1, reps:12, weight: 40}
  return (
    <SafeAreaView
      className="flex justify-center h-full flex-col bg-black w-full"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex justify-start flex-col items-center  bg-background w-full h-full">
        <WorkoutCard logItem = {exer_data}></WorkoutCard>
      </View>
    </SafeAreaView>
  );
};

export default ExercisesPage;
