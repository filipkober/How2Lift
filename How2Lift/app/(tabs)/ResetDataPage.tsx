import { dataService } from '@/services/dataService'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Modal, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import RNRestart from 'react-native-restart'

const ResetDataPage = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const router = useRouter();

    const onResetData = async () => {
        await dataService.resetAllSettingsAndCache();
        RNRestart.restart();
    }

    const handleReset = () => {
        setShowConfirmation(true);
    }

    const cancelReset = () => {
        setShowConfirmation(false);
    }

    const confirmReset = () => {
        setShowConfirmation(false);
        onResetData();
    }

  return (
    <SafeAreaView
        className="flex justify-center h-full flex-col bg-black w-full"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
      >
        <View className="flex w-full h-full bg-background p-6">
          <Text
            className="text-2xl text-blue-500 mb-4"
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="blue" /> Go back
          </Text>
          
          <View className="flex items-center justify-center flex-1">
            <View className="bg-primary p-6 rounded-xl w-full max-w-md shadow-lg">
              <View className="items-center mb-6">
                <View className="bg-red-500 rounded-full p-3 mb-3">
                  <Ionicons name="refresh-outline" size={34} color="white" />
                </View>
                <Text className="text-white text-2xl font-bold">Reset All Data</Text>
                <Text className="text-white text-center mt-2">
                  This will reset all your settings, workout history, and other data to default values. This action cannot be undone.
                </Text>
              </View>
              
              <TouchableOpacity 
                className="bg-red-500 py-4 rounded-lg items-center mt-4"
                onPress={handleReset}
              >
                <Text className="text-white font-bold text-lg">Reset Data</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirmation Modal */}
          <Modal
            visible={showConfirmation}
            transparent={true}
            animationType="fade"
          >
            <View className="flex-1 justify-center items-center bg-black/70">
              <View className="bg-primary p-6 rounded-xl w-4/5 max-w-sm">
                <Text className="text-white text-xl font-bold mb-4">Confirm Reset</Text>
                <Text className="text-white mb-6">
                  Are you sure you want to reset all data? This action cannot be undone.
                </Text>
                
                <View className="flex-row justify-end space-x-4">
                  <TouchableOpacity 
                    className="py-2 px-4 rounded-lg border border-white"
                    onPress={cancelReset}
                  >
                    <Text className="text-white">Cancel</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    className="bg-red-500 py-2 px-4 rounded-lg"
                    onPress={confirmReset}
                  >
                    <Text className="text-white font-bold">Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
  )
}

export default ResetDataPage