import { Link } from "expo-router";
import React from "react";
import WorkoutCard from "@/components/ExercisePage/WorkoutCard";
import { Button, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

const ExercisesPage = ({ navigation }: any) => {
  const exer_data = {date: "14.09.2024", title: "Seated bicep curl", reps:12, weight: 40}
  return (
    <SafeAreaView
      className="flex justify-center h-full flex-col bg-black w-full"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex justify-start flex-col items-center  bg-background w-full h-full">
        <WorkoutCard exercie_data = {exer_data}></WorkoutCard>
      </View>
    </SafeAreaView>
  );
};

export default ExercisesPage;
