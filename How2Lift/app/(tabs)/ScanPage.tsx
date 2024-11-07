import ScanIndicator from "@/components/ScanPage/ScanIndicator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { ImageBackground, Platform, StatusBar, Text, TouchableOpacity, View } from "react-native";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";


const ScanPage = ({ navigation }: any) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null)

  useEffect(() => {
    if(!permission)
    {
      requestPermission();
    }
  }, []);

  const TakePhoto = async () =>
  {
    console.log("Take photo")
    if(cameraRef.current)
    {
      console.log("cameraRef exists")
      const options = {
        quality: 1,
        base64: true,
      }
      const newPhoto = await cameraRef.current.takePictureAsync(options);
      console.log(newPhoto)
      setPhoto(newPhoto);
    }
  }
  
  
  const ResetPhoto = () =>
  {
      setPhoto(null);
  }

  const toggleCameraFacing = () =>
  {
    console.log(`swapped ${facing}`)
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  if (!permission)
  {
    return (
      <SafeAreaView className="flex flex-col-reverse items-center justify-center">
        <Text>No camera permission</Text>
      </SafeAreaView>
    )
  }
  if (photo != null)
  {
    //Scan phase
    return (
    <SafeAreaView className="flex justify-center h-full flex-col bg-blue-500"
      style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,}}>
      <View className="flex w-full h-full flex-col bg-black">
        <ImageBackground
          source={{ uri: photo.uri }}
          className={`w-full h-full object-contain flex items-end justify-center flex-row p-[4rem]`}
        >
          <ScanIndicator/>
          <TouchableOpacity
            onPress={ResetPhoto}
            className='w-16 h-16 bg-gray-300 rounded-full border-4 border-gray-400 shadow-lg flex justify-center items-center' //add some styling
            activeOpacity={0.7}
            >
            <Text className="text-black text-center">Cancel</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View className="flex bg-red-700 h-[60px] w-full"/>
    </SafeAreaView>
    )
  }
  else
  {
    //Camera phase
    return (
      <SafeAreaView className="flex justify-center h-full flex-col-reverse" style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,}}>
        <View className="flex bg-green-700 h-[60px] w-full"/>
        <CameraView facing={facing} className="flex h-full w-full bg-indigo-400" ref={cameraRef}>
          <View className="bg-transparent flex flex-col-reverse items-center p-[4rem] h-full">
            <View className="flex items-end justify-around space-x-8 flex-row ">
              <TouchableOpacity
                onPress={TakePhoto}
                className='w-16 h-16 bg-white rounded-full border-4 border-gray-500 shadow-lg p-0 flex justify-center items-center'
                activeOpacity={0.7}
                >
                <MaterialCommunityIcons name="biohazard" size={48} color="#f8f8f8" className='w-16 h-16 flex items-center justify-center'/>
              </TouchableOpacity>
            </View>
          </View>
        </CameraView>
      </SafeAreaView>
    );
  }
};

export default ScanPage;
