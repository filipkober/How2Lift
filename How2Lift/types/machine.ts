import { machineService } from "@/services/machineService"
import { Exercise } from "./exercise"
import { Muscle } from "./muscle"

export type MachineSearchResult = {
    id: number,
    name: string,
    imageUrl: string,
    muscleNames: string[]
}

export type MachineProps = {
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    exerciseIds: number[],
    trainedMuscleIds: number[]
}

export class Machine {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    exerciseIds: number[];
    trainedMuscleIds: number[];

    constructor({
        id,
        name,
        description,
        imageUrl,
        exerciseIds,
        trainedMuscleIds
    }: MachineProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.exerciseIds = exerciseIds;
        this.trainedMuscleIds = trainedMuscleIds;
    }

    getExercises = async (): Promise<Exercise[]> => {
        return machineService.getExercisesByMachineId(this.id);
    }

    getTrainedMuscles = async (): Promise<Muscle[]> => {
        return machineService.getMusclesByMachineId(this.id);
    }
}