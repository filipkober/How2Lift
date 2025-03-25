import { Exercise } from "./exercise"
import { Muscle } from "./muscle"

export type MachineSearchResult = {
    id: number,
    name: string,
    imageUrl: string,
    muscleNames: string[]
}

export type Machine = {
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    exercises: Exercise[],
    trainedMuscles: Muscle[]
}