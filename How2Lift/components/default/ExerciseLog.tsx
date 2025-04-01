import { Text, View, StyleSheet } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ExerciseLogItem, RepType } from '@/types/exercise'

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

interface Props {
    log: ExerciseLogItem[];
    useLbs: boolean;
}

function BodyWeightLogItem({ reps }: { reps: number }) {
    return (
        <View className='flex flex-row' style={styles.card}>
            <Text className='text-center text-4xl'>{reps} reps</Text>
        </View>
    )
}

function WeightLogItem({ weight, reps, lbs }: { weight: number, reps: number, lbs: boolean }) {
    return ( 
        <View className='flex flex-row'
            style={styles.card}
        >
            <View className='border-r-2 border-border p-2 flex-1'>
                <Text className='text-4xl text-center'>{reps}x</Text>
            </View>
            <View className='border-r-2 border-border p-2 flex-1'>
                <Text className='text-4xl text-center'>{weight}</Text>
            </View>
            <View className='p-2 flex-1'>
                <Text className='text-4xl text-center'>{lbs ? "lbs" : "kg"}</Text>
            </View>
        </View>
    )
}

function TimeLogItem({ duration }: { duration: number }) {

    const durationText = duration < 60 ? `${duration} seconds` : `${duration / 60} minutes`;

    return (
        <View className='flex flex-row p-4' style={styles.card}>
            <Text className='text-center text-4xl'>{durationText}</Text>
        </View>
    )
}

export default function ExerciseLog({ log, useLbs }: Props) {


    return (
        <ScrollView>
            {log.map((item) => {

                const logItem = item.repType === RepType.BODYWEIGHT ? (
                    <BodyWeightLogItem reps={item.reps} />
                ) : item.repType === RepType.WEIGHT ? (
                    <WeightLogItem weight={item.weight} reps={item.reps} lbs={useLbs} />
                ) : item.repType === RepType.TIME ? (
                    <TimeLogItem duration={item.duration} />
                ) : null;

                return (
                <View key={item.id}>
                    <Text className='ml-2 font-bold'>{item.date.toLocaleDateString()}</Text>
                    {logItem}
                </View>
                )
            })}
        </ScrollView>
    )
}