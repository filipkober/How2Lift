import { Button, View } from 'react-native';


const LoadingPage = ({ navigation }: any) => {

  return (
    <View className="flex-1 justify-center items-center">
      <Button
        title="Click me"
        onPress={() => navigation.navigate("(tabs)", { screen: "Scan" })}
      />
    </View>
  );
};

export default LoadingPage;
