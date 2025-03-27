import Divider from "@/components/default/Divider";
import ExerciseLog from "@/components/default/ExerciseLog";
import ExerciseLogModal from "@/components/default/ExerciseLogModal";
import { dataService } from "@/services/dataService";
import { ExerciseService } from "@/services/exerciseService";
import { Exercise, ExerciseLogData, ExerciseLogItem, RepType } from "@/types/exercise";
import { videoToImage } from "@/util/videoToImage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Button, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Video from "react-native-video";
import VideoPlayer from 'react-native-video-player';

const ExercisePage = ({ navigation, route }: any) => {
  const { exerciseId } = route.params;

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [exerciseLog, setExerciseLog] = useState<ExerciseLogItem[]>([]);
  const [useLbs, setUseLbs] = useState(false);
  const exerciseService = new ExerciseService();

  useEffect(() => {
    const fetchExercise = async () => {
      const fetchedExercise = await exerciseService.getExerciseById(exerciseId);
      if(!fetchedExercise) {
        navigation.navigate("NotFound");
        return;
      }
      setExercise(fetchedExercise);

      const fetchedLog = await fetchedExercise.getLog();
      setExerciseLog(fetchedLog);
    };

    fetchExercise();
  }, [exerciseId]);

      useEffect(() => {
          dataService.getSettings().then(settings => {
              setUseLbs(settings.useLbs);
          });
      }, []);

  const handleLogItemUpdate = async (updatedItem: ExerciseLogItem) => {
    if(!exercise) return;
    await exercise.updateLogItem(updatedItem);
    const updatedLog = await exercise.getLog();
    setExerciseLog(updatedLog);
  };

  const handleLogItemRemove = async (itemId: string) => {
    if(!exercise) return;
    await exercise.removeLogItem(itemId);
    const updatedLog = await exercise.getLog();
    setExerciseLog(updatedLog);
  };

  const handleLogItemAdd = async (newItem: ExerciseLogData) => {
    if(!exercise) return;
    await exercise.addLogItem(newItem);
    const updatedLog = await exercise.getLog();
    setExerciseLog(updatedLog);
  };

  return (
    <SafeAreaView
      className="flex h-full flex-col bg-black w-full"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView className="flex w-full h-full bg-background">
        <Text className="text-4xl"
        onPress={() => navigation.goBack()}
        ><MaterialCommunityIcons name="arrow-left" size={38} className="mr-2" />{exercise?.name || "Loading..."}</Text>
        <Divider className="my-2" />
        <View className="flex flex-col w-full h-[35vh]">
            {exercise && <Video
            source={{ uri: exercise?.videoUrl || "" }}
            style={{
              width: '100%',
            }}
            onError={(error) => console.error(error)}
            paused={true}
            controls
          />}
          </View>
          <Divider className="mt-2" />
          <View className="flex flex-col w-full p-4">
            <Text className="text-3xl font-bold mb-2 text-left">How to perform:</Text>
            {exercise && exercise.steps.map((step, index) => (
              <Text key={index} className="text-xl">{index + 1}. {step}</Text>
            )
            )}
          </View>
          <Divider className="mt-2" />
          <View className="flex flex-col w-full p-4">
            <Text className="text-3xl font-bold mb-2 text-left">Common mistakes:</Text>
            {exercise && exercise.commonMistakes.map((mistake, index) => (
              <Text key={index} className="text-xl">• {mistake}</Text>
            )
            )}
          </View>
          <Divider className="mt-2" />
          <View className="flex flex-col w-full p-4">
            <Text className="text-3xl font-bold mb-2 text-left">My log:</Text>
            <ExerciseLog log={exerciseLog} useLbs={useLbs} />
          </View>
          <ExerciseLogModal handleLogItemAdd={handleLogItemAdd} useLbs={useLbs} 
          repType={exercise?.repType || RepType.WEIGHT} 
          />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExercisePage;
