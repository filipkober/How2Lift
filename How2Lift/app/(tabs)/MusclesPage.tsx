import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Animated, Dimensions, ImageBackground, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

enum VisibleSide {
  FRONT,
  BACK
}

const MusclesPage = () => {
  //This must be here
  class Muscle {
    id: number;
    name: string;
    px: number;
    py: number;
    sx: number;
    sy: number;
    side: VisibleSide;
    action: () => void;

    constructor(id: number, name: string, px: number, py: number, sx: number, sy: number, side: VisibleSide, action?: () => void) {
      this.id = id;
      this.name = name;
      this.px = px; //position x in %
      this.py = py; //position y in %
      this.sx = sx; //size x in %
      this.sy = sy; //size y in %
      this.side = side;
      this.action = action || (() => {
        console.log(`${id} Clicked: ${name} pos: ${px} ${py}`)
        setSelectedMuscle(this)
      });
    }
  }
  const images = [
    require('../../assets/images/MusclesPage/front/abdominals.png'),
    require('../../assets/images/MusclesPage/front/biceps.png'),
    require('../../assets/images/MusclesPage/front/brain.png'),
    require('../../assets/images/MusclesPage/front/deltoid.png'),
    require('../../assets/images/MusclesPage/front/forearms.png'),
    require('../../assets/images/MusclesPage/front/gastrocnemius.png'),
    require('../../assets/images/MusclesPage/front/pectoralis.png'),
    require('../../assets/images/MusclesPage/front/quadriceps.png'),
    require('../../assets/images/MusclesPage/front/trapezius.png'),

    require('../../assets/images/MusclesPage/back/back.png'),
    require('../../assets/images/MusclesPage/back/forearms.png'),
    require('../../assets/images/MusclesPage/back/gastrocnemius.png'),
    require('../../assets/images/MusclesPage/back/gluteus.png'),
    require('../../assets/images/MusclesPage/back/hamstrings.png'),
    require('../../assets/images/MusclesPage/back/trapezius.png'),
    require('../../assets/images/MusclesPage/back/triceps.png'),
    require('../../assets/images/MusclesPage/human_front.png'),
    require('../../assets/images/MusclesPage/human_back.png'),
  ];
  //ids can be duplicates
  const MUSCLES = [
      new Muscle(0, "Abdominals", 50, 39, 18, 20, VisibleSide.FRONT),
      new Muscle(1, "Biceps",  27, 32, 10, 10, VisibleSide.FRONT),
      new Muscle(1, "Biceps",  73, 32, 10, 10, VisibleSide.FRONT),
      new Muscle(2, "Brain", 50, 9, 20, 12, VisibleSide.FRONT),
      new Muscle(3, "Deltoid",  28, 23, 12, 8, VisibleSide.FRONT),
      new Muscle(3, "Deltoid", 72, 23, 12, 8, VisibleSide.FRONT),
      new Muscle(4, "Forearms", 23, 45, 12, 15, VisibleSide.FRONT),
      new Muscle(4, "Forearms", 77, 45, 12, 15, VisibleSide.FRONT),
      new Muscle(5, "Gastrocnemius", 64, 80, 18, 20, VisibleSide.FRONT),
      new Muscle(5, "Gastrocnemius", 36, 80, 18, 20, VisibleSide.FRONT),
      new Muscle(6, "Pectoralis", 50, 24, 32, 10, VisibleSide.FRONT),
      new Muscle(7, "Quadriceps", 40, 60, 20, 20, VisibleSide.FRONT),
      new Muscle(7, "Quadriceps", 60, 60, 20, 20, VisibleSide.FRONT),
      new Muscle(8, "Trapezius", 50, 17, 35, 4, VisibleSide.FRONT),
  
      new Muscle(9, "Back", 50, 32, 28, 21, VisibleSide.BACK),
      new Muscle(10, "Forearms", 23, 45, 12, 15, VisibleSide.BACK),
      new Muscle(10, "Forearms", 77, 45, 12, 15, VisibleSide.BACK),
      new Muscle(11, "Gastrocnemius", 36, 80, 18, 18, VisibleSide.BACK),
      new Muscle(11, "Gastrocnemius", 64, 80, 18, 18, VisibleSide.BACK),
      new Muscle(12, "Gluteus", 50, 49, 30, 12, VisibleSide.BACK),
      new Muscle(13, "Hamstrings", 38, 63, 17, 15, VisibleSide.BACK),
      new Muscle(13, "Hamstrings", 62, 63, 17, 15, VisibleSide.BACK),
      new Muscle(14, "Trapezius", 50, 17, 35, 7, VisibleSide.BACK),
      new Muscle(15, "Triceps", 28, 31, 12, 12, VisibleSide.BACK),
      new Muscle(15, "Triceps", 72, 31, 12, 12, VisibleSide.BACK),
  ];

  const IMAGE_WIDTH = 1588; //default size
  const IMAGE_HEIGHT = 794;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 }); //relative size

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [animation] = useState(new Animated.Value(0));
  const [selectedSide, setSelectedSide] = useState<VisibleSide>(VisibleSide.FRONT);
  const [selectedMuscle, setSelectedMuscle] = useState<Muscle | null>(null);
  
  const getButtonStyle = (m: Muscle): ViewStyle => {
    // console.log(`Screen: ${screenWidth} x ${screenHeight}`)
    // console.log(`Image: ${imageSize.width} x ${imageSize.height}`)
    return ({
      position: "absolute" as "absolute",
      left: ((m.px-m.sx/2)/100)*imageSize.width,
      top: ((m.py-m.sy/2)/100)*imageSize.height,
      width: (m.sx/100)*imageSize.width,
      height: (m.sy/100)*imageSize.height,
      backgroundColor: "rgba(0, 0, 255, 0)", //0.3
    });
  }

  const switchList = (listType: VisibleSide) => {
    setSelectedMuscle(null)
    setSelectedSide(listType)
    if(listType == VisibleSide.FRONT)
    {
      console.log("test")
    }
    Animated.spring(animation, {
      toValue: (listType == VisibleSide.BACK ? 1 : 0) * screenWidth / 2,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView
        className="flex justify-center h-full flex-col bg-black w-full"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
      >
        <View className="flex justify-start flex-col items-start bg-background w-full h-full">
          <View className='w-full h-[40px] bg-secondary flex flex-row '>
            <TouchableOpacity
              className='w-[50%] h-full p-2 items-center justify-center flex'
              onPress={() => switchList(0)}
            >
              <Text className='text-[20px] font-quicksand_bold'>Front</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='w-[50%] h-full p-2 items-center justify-center flex'
              onPress={() => switchList(1)}
            >
              <Text className='text-[20px] font-quicksand_bold'>Back</Text>
            </TouchableOpacity>
            <Animated.View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 3,
                  backgroundColor: 'blue',
                  width: "50%",
                  transform: [
                    {
                      translateX: animation,
                    },
                  ],
                }}
              />
          </View>
          
          <View className="flex w-full h-full bg-background flex-1 justify-start items-center pt-4">
            <Text
              className='font-quicksand_bold text-center'
              style={{ fontSize: screenWidth * 0.045 }} //360x = 17
            >
              Click the muscle you want to exercise
            </Text>
            <ImageBackground
                source={(selectedMuscle == null) ?
                  ((selectedSide == VisibleSide.FRONT) ?
                    require('../../assets/images/MusclesPage/human_front.png') :
                    require('../../assets/images/MusclesPage/human_back.png')) :
                    images[selectedMuscle.id]?.uri || require('../../assets/images/MusclesPage/human_front.png')
                }
                className="w-full h-full flex items-center justify-center"
                style={{
                  width: (screenHeight-40)*0.4, //ar = 794:1588 = 0.5
                  height: (screenHeight-40)*0.8, //perfection
                  marginBottom: 2,
                }}
                resizeMode="contain"
                onLayout={(event) => {
                  const { width, height } = event.nativeEvent.layout;
                  setImageSize({ width, height });
                }}
              >
              {imageSize.width > 0 &&
              MUSCLES.map((m, index) => {
                if(m.side != selectedSide) return null;
                return (
                  <TouchableOpacity key={index} style={getButtonStyle(m)} onPress={m.action} />
                )
              })}
              
              </ImageBackground>
              {(selectedMuscle != null)?
              <View
                className="absolute bottom-0 w-full items-center"
                style={{ height: screenHeight * 0.26, justifyContent: 'center' }}
              >
                <TouchableOpacity
                  className="flex-row items-center justify-between pl-4 py-2 rounded-lg border border-gray-400 bg-white shadow-md"
                  style={{ minWidth: 180, maxHeight: 50 }}
                  onPress={() => console.log('not implemented yet')}
                >
                <Text className="text-lg font-semibold text-black">{selectedMuscle.name}</Text>
                <MaterialCommunityIcons name="chevron-right" size={48} color="black" className="ml-auto" />
                </TouchableOpacity>
              </View>
              : null}
          </View>
        </View>
      </SafeAreaView>
  )
}

export default MusclesPage
