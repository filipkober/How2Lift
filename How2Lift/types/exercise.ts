import { Machine } from "./machine"
import { Muscle } from "./muscle"

export type ExerciseSearchResult = {
    id: number,
    name: string,
    imageUrl: string | null,
    muscleNames: string[]
}

export type Exercise = {
    id: number,
    name: string,
    description: string,
    videoUrl: string | null,
    steps: string[],
    commonMistakes: string[],
    machine: Machine,
    trainedMuscles: Muscle[]
}