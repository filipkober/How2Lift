import { Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ExerciseLogItem, RepType } from '@/types/exercise'
import { dataService } from '@/services/dataService';


interface Props {
    log: ExerciseLogItem[];
    useLbs: boolean;
}

function BodyWeightLogItem({ reps }: { reps: number }) {
    return (
        <View>
            <Text>{reps} reps</Text>
        </View>
    )
}

function WeightLogItem({ weight, reps, lbs }: { weight: number, reps: number, lbs: boolean }) {
    return ( 
        <View>
            <View>
                <Text>{reps}x</Text>
            </View>
            <View>
                <Text>{weight}</Text>
            </View>
            <View>
                <Text>{lbs ? "lbs" : "kg"}</Text>
            </View>
        </View>
    )
}

function TimeLogItem({ duration }: { duration: number }) {

    const durationText = duration < 60 ? `${duration} seconds` : `${duration / 60} minutes`;

    return (
        <View>
            <Text>{durationText}</Text>
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
                    <Text>{item.date.toLocaleDateString()}</Text>
                    {logItem}
                </View>
                )
            })}
        </ScrollView>
    )
}