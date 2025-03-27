import {
  BodyweightData,
  ExerciseLogData,
  RepType,
  TimeData,
  WeightData,
} from "@/types/exercise";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import "@/styles/ExerciseLogModal.css";

interface ModalDataProps {
  data: ExerciseLogData;
  setData: (data: ExerciseLogData) => void;
}
function ModalBodyweightData({ data, setData }: ModalDataProps) {
  const assertedData = data as BodyweightData;
  return (
    <View className="card flex flex-row">
      <TextInput
        value={assertedData.reps.toString()}
        onChangeText={(text) =>
          setData({ ...assertedData, reps: parseInt(text) })
        }
        keyboardType="numeric"
        className="text-2xl text-center p-2 w-[75%] border-r-2 border-border"
      />
      <Text className="text-2xl my-auto uppercase mx-auto">Reps</Text>
    </View>
  );
}
function ModalWeightData({
  data,
  setData,
  useLbs,
}: ModalDataProps & { useLbs: boolean }) {
  const assertedData = data as WeightData;
  return (
    <View className="flex flex-row card">
      <View className="flex flex-row w-[30%] border-r-2 border-border justify-center">
        <View className="flex flex-row w-full">
        <TextInput
          value={assertedData.reps.toString()}
          onChangeText={(text) =>
            setData({ ...assertedData, reps: parseInt(text) })
          }
          keyboardType="numeric"
          className="text-2xl py-4 pl-4 w-[70%]"
        />
        <Text className="text-2xl my-auto w-[10%]">X</Text>
        </View>
      </View>
      <View className="flex flex-row w-1/2 border-r-2 border-border">
        <TextInput
          value={assertedData.weight.toString()}
          onChangeText={(text) =>
            setData({ ...assertedData, weight: parseFloat(text) })
          }
          keyboardType="numeric"
          className="text-center text-2xl w-full"
        />
      </View>
      <View className="flex flex-row flex-1">
        <Text className="text-2xl my-auto text-center mx-auto">{useLbs ? "lbs" : "kg"}</Text>
      </View>
    </View>
  );
}
function ModalTimeData({ data, setData }: ModalDataProps) {
  const assertedData = data as TimeData;
  return (
    <View className="card flex flex-row">
      <TextInput
        value={assertedData.duration.toString()}
        onChangeText={(text) =>
          setData({ ...assertedData, duration: parseInt(text) })
        }
        keyboardType="numeric"
        className="text-2xl text-center p-2 w-[70%] border-r-2 border-border"
      />
      <Text className="text-xl my-auto mx-auto">seconds</Text>
    </View>
  );
}

interface Props {
  handleLogItemAdd: (newItem: ExerciseLogData) => Promise<void>;
  useLbs: boolean;
  repType: RepType;
}
export default function ExerciseLogModal({ handleLogItemAdd, useLbs, repType }: Props) {

  let emptyData: ExerciseLogData
  if (repType === RepType.BODYWEIGHT) {
    emptyData = { reps: 0, repType: RepType.BODYWEIGHT };
  } else if (repType === RepType.WEIGHT) {
    emptyData = { reps: 0, weight: 0, repType: RepType.WEIGHT };
  } else if (repType === RepType.TIME) {
    emptyData = { duration: 0, repType: RepType.TIME };
  } else {
    emptyData = { reps: 0, repType: RepType.BODYWEIGHT };
  }

  const [showModal, setShowModal] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalData, setModalData] = useState<ExerciseLogData>(emptyData);

  const handleAdd = async () => {
    if (modalData) {
      await handleLogItemAdd(modalData);
      setModalData(emptyData);
    }
    setShowModal(false);
  };

  const cancel = () => {
    setShowModal(false);
  };

  const ModalContent = () => {
    return repType === RepType.BODYWEIGHT ? (
      <ModalBodyweightData data={modalData} setData={setModalData} />
    ) : repType === RepType.WEIGHT ? (
      <ModalWeightData
        data={modalData}
        setData={setModalData}
        useLbs={useLbs}
      />
    ) : repType === RepType.TIME ? (
      <ModalTimeData data={modalData} setData={setModalData} />
    ) : null;
  };

  return (
    <View>
      <View className="fixed bottom-4 left-1/2 p-4 bg-white rounded-full aspect-square shadow-lg transform -translate-x-1/2 flex flex-row">
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
        >
          <MaterialCommunityIcons name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Modal visible={showModal} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="bg-white rounded-xl w-4/5 max-w-sm">
            <View className="p-6">
            <Text className="font-bold uppercase ml-2">New entry</Text>
            <View className="flex flex-row card mb-4">
              <View className="w-[80%] py-2 pl-4 border-r-2 border-border">
                <Text className="font-bold my-auto text-2xl text-center">
                  {selectedDate.toLocaleDateString()}
                </Text>
              </View>
              <View className="flex-1 mx-auto my-auto">
                <TouchableOpacity onPress={() => setShowDateTimePicker(true)}>
                  <MaterialCommunityIcons
                    name="calendar"
                    size={36}
                    color="black"
                    className="mx-auto"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ModalContent />

            {showDateTimePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setSelectedDate(date || selectedDate);
                  setShowDateTimePicker(false);
                }}
              />
            )}
            </View>
            <View className="flex flex-row mt-auto w-full border-t-2 border-border">
              <View className="flex-1">
              <TouchableOpacity onPress={handleAdd}>
                <Text className="w-full text-center py-2 text-xl border-border border-r-2">Add</Text>
              </TouchableOpacity>
              </View>
              <View className="flex-1">
              <TouchableOpacity onPress={cancel}>
                <Text className="w-full text-center py-2 text-xl">Cancel</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
