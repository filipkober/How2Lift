import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { ExerciseLogItem, RepType} from "../../types/exercise";
import WorkoutCard from "@/components/ExercisePage/WorkoutCard";
import { Button, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { dataService } from "@/services/dataService";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const ExercisesPage = () => {
  const navigation = useNavigation();
  const [exerciseLog, setExerciseLog] = useState<ExerciseLogItem[]>([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const log = await dataService.getExerciseLog();
      setExerciseLog(log);
    }
    );
    return unsubscribe;
  }, [navigation]);
  return (
    <GestureHandlerRootView className="h-full w-full bg-background">
    <SafeAreaView
      className="flex justify-center h-full flex-col bg-black w-full"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView className="w-full h-full  bg-background">
        <View className="flex justify-start flex-col items-center w-full h-full">
          <Text className="text-4xl text-black font-quicksand_bold my-4">Workout Log</Text>
          {exerciseLog.map(logItem => <WorkoutCard logItem = {logItem} key={logItem.id}/>)}
        </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default ExercisesPage;
