import { machineService } from './../services/machineService';
import { exerciseService, ExerciseService } from "@/services/exerciseService"
import { Machine } from "./machine"
import { Muscle } from "./muscle"
import { dataService } from '@/services/dataService';
import { v4 as uuidv4 } from 'uuid';

export enum RepType {
    BODYWEIGHT = "BODYWEIGHT",
    WEIGHT = "WEIGHT",
    TIME = "TIME"
}

export type ExerciseSearchResult = {
    id: number,
    name: string,
    imageUrl: string | null,
    muscleNames: string[]
}

export type ExerciseProps = {
    id: number,
    name: string,
    description: string,
    videoUrl: string | null,
    steps: string[],
    commonMistakes: string[],
    machineId: number,
    trainedMuscleIds: number[],
    repType: RepType;
}

type ExerciseLogDetails = {
    id: string,
    exerciseId: number,
    date: Date,
}

export type BodyweightData = {
    repType: RepType.BODYWEIGHT,
    reps: number,
}

export type WeightData = {
    repType: RepType.WEIGHT,
    weight: number,
    reps: number,
}

export type TimeData = {
    repType: RepType.TIME,
    duration: number,
}

export type ExerciseLogData = BodyweightData | WeightData | TimeData;

export type ExerciseLogItem = 
    ExerciseLogDetails & ExerciseLogData;
export class Exercise {
    id: number;
    name: string;
    description: string;
    videoUrl: string | null;
    steps: string[];
    commonMistakes: string[];
    machineId: number;
    trainedMuscleIds: number[];
    repType: RepType;
    

    constructor({
        id,
        name,
        description,
        videoUrl,
        steps,
        commonMistakes,
        machineId,
        trainedMuscleIds,
        repType,

    }: ExerciseProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.videoUrl = videoUrl;
        this.steps = steps;
        this.commonMistakes = commonMistakes;
        this.machineId = machineId;
        this.trainedMuscleIds = trainedMuscleIds;
        this.repType = repType;
    }

    getMachine = async (): Promise<Machine | null> => {
        return machineService.getMachineById(this.machineId);
    }

    getTrainedMuscles = async (): Promise<Muscle[]> => {
        return exerciseService.getMusclesByExerciseId(this.id);
    }

    getLog = async (): Promise<ExerciseLogItem[]> => {
        return dataService.getExerciseLogByExerciseId(this.id);
    }

    addLogItem = async (data: ExerciseLogData): Promise<void> => {
        return dataService.addExerciseLogItem({
            id: uuidv4(),
            exerciseId: this.id,
            date: new Date(),
            ...data
        });
    }

    public async updateLogItem(updatedItem: ExerciseLogItem): Promise<void> {
        return dataService.updateExerciseLogItem(updatedItem);
    }

    public async removeLogItem(itemId: string): Promise<void> {
        return dataService.removeExerciseLogItem(itemId);
    }


}