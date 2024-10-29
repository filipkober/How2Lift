import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const ScanPage = ({ navigation }: any) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View className="flex-1 justify-center">
      <CameraView facing={facing} className="flex-1">
        <View className="flex-1 flex-row bg-transparent m-[64px]">
          <TouchableOpacity onPress={toggleCameraFacing} className="flex-1 flex-row items-center">
            <Text className="text-[1.5rem] font-bold color-white">F-3-lip camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default ScanPage;
