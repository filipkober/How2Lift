import { Button, Text, View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl text-indigo-600">Test &λΨᾛΎώὯϗΔ</Text>
      <Button title="Go to About" onPress={() => {}} />
    </View>
  );
}
