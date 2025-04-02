import {
  BodyweightData,
  ExerciseLogData,
  RepType,
  TimeData,
  WeightData,
} from "@/types/exercise";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
interface ModalDataProps {
  data: ExerciseLogData;
  setData: (data: ExerciseLogData) => void;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#adb5bd',
    borderRadius: 20,
    // Note: React Native uses different shadow properties for iOS and Android
    // For iOS:
    shadowColor: 'rgba(33, 37, 41, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    // For Android:
    elevation: 2,
  }
});

function ModalBodyweightData({ data, setData }: ModalDataProps) {
  const assertedData = data as BodyweightData;
  const [repsText, setRepsText] = useState(assertedData.reps.toString());

  const handleRepsChange = (text: string) => {
    setRepsText(text);
    const reps = text === "" ? 0 : parseInt(text) || 0;
    setData({ ...assertedData, reps });
  };

  return (
    <View className="flex flex-row" style={[styles.card]}>
      <TextInput
        value={repsText}
        onChangeText={handleRepsChange}
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
  const [repsText, setRepsText] = useState(assertedData.reps.toString());
  const [weightText, setWeightText] = useState(assertedData.weight.toString());

  const handleRepsChange = (text: string) => {
    setRepsText(text);
    const reps = text === "" ? 0 : parseInt(text) || 0;
    const weight = weightText === "" ? 0 : parseFloat(weightText) || 0;
    setData({ ...assertedData, weight, reps });
  };

  const handleWeightChange = (text: string) => {
    setWeightText(text);
    const weight = text === "" ? 0 : parseFloat(text) || 0;
    const reps = repsText === "" ? 0 : parseInt(repsText) || 0;
    setData({ ...assertedData, weight, reps });
  };

  return (
    <View className="flex flex-row" style={[styles.card]}>
      <View className="flex flex-row w-[30%] border-r-2 border-border justify-center">
        <View className="flex flex-row w-full">
        <TextInput
          value={repsText}
          onChangeText={handleRepsChange}
          keyboardType="numeric"
          className="text-2xl py-4 pl-4 w-[65%]"
        />
        <Text className="text-2xl my-auto flex-1">X</Text>
        </View>
      </View>
      <View className="flex flex-row w-1/2 border-r-2 border-border">
        <TextInput
          value={weightText}
          onChangeText={handleWeightChange}
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
  const [durationText, setDurationText] = useState(assertedData.duration.toString());

  const handleDurationChange = (text: string) => {
    setDurationText(text);
    const duration = text === "" ? 0 : parseInt(text) || 0;
    setData({ ...assertedData, duration });
  };

  return (
    <View className="flex flex-row" style={[styles.card]}>
      <TextInput
        value={durationText}
        onChangeText={handleDurationChange}
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
  selectedDate: Date;
  toggleDateTimePicker?: () => void;
}
export default function ExerciseLogModal({ handleLogItemAdd, useLbs, repType, selectedDate, toggleDateTimePicker }: Props) {

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

  const ModalContent = useCallback(() => {
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
  }, [repType]);

  return (
    <View>
      <View className="absolute bottom-4 left-1/2 p-4 bg-white rounded-full aspect-square shadow-lg transform -translate-x-1/2 flex flex-row">
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
            <View className="flex flex-row mb-4" style={[styles.card]}>
              <View className="w-[80%] py-2 pl-4 border-r-2 border-border">
                <Text className="font-bold my-auto text-2xl text-center">
                  {selectedDate.toLocaleDateString('pl-PL')}
                </Text>
              </View>
              <View className="flex-1 mx-auto my-auto">
                <TouchableOpacity onPress={toggleDateTimePicker}>
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