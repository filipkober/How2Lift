import { Link } from "expo-router";
import React from "react";
import { Button, Platform, SafeAreaView, StatusBar, Text, View } from "react-native";

const ExercisesPage = ({ navigation }: any) => {
  return (
    <SafeAreaView
      className="flex justify-center h-full flex-col bg-black w-full"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex w-full h-full bg-background">
        <View className="flex-1 justify-center items-center">
          <Text>ExercisesPage</Text>
          <Link href="/" className="text-cyan-400">
            {" "}
            Fuck go back
          </Link>
          <Text className="text-2xl text-indigo-600">Test &λΨᾛΎώὯϗΔ</Text>
          <Button
            title="Go to About"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text className="text-cyan-600">Zażółć gęślą jaźń</Text>
          <Text className="text-cyan-600 font-quicksand">
            Zażółć gęślą jaźń
          </Text>
          <Text className="text-cyan-600 font-quicksand_bold">
            Zażółć gęślą jaźń
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExercisesPage;
