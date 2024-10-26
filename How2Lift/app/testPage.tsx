import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const TestPage = () => {
  return (
    <View>
      <Text>Test Page</Text>
      <Link href="/" className="text-cyan-400"> Fuck go back</Link>
      <Text className="text-2xl text-indigo-600">Test &λΨᾛΎώὯϗΔ</Text>

      <Button title="Go to About" onPress={() => {}} />

      <Text className="text-cyan-600">
        Zażółć gęślą jaźń
      </Text>
      <Text className="text-cyan-600 font-quicksand">
        Zażółć gęślą jaźń
      </Text>
      <Text className="text-cyan-600 font-quicksand_bold">
        Zażółć gęślą jaźń
      </Text>


      {/* <TouchableOpacity onPress={()=>{}}>
        <Text>Test 2</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text>Test 3</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback>
      <Text>Test 4</Text>
      </TouchableWithoutFeedback>
      <ActivityIndicator size={"large"}></ActivityIndicator>
      <FlatList
      data={items}
      renderItem={(item: string)=>{
        <View>
          <Text>Test 5 - {item}</Text>
        </View>
      }}
      keyExtractor={(item: { id: any; }) => item}
      />
      <ScrollView>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
        <Text>Test 6</Text>
      </ScrollView>
      <Modal
        visible={true}
        animationType="slide"
        onRequestClose={()=>{console.log("test modal")}}>
        <View className="m-[20px]">
          <Text>Test 7</Text>
        </View>
      </Modal> */}
    </View>
  )
}

export default TestPage