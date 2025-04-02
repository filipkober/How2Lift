import { machineService } from './../services/machineService';
import { exerciseService, ExerciseService } from "@/services/exerciseService"
import { Machine } from "./machine"
import { Muscle } from "./muscle"
import { dataService } from '@/services/dataService';
import uuid from 'react-native-uuid';

export enum RepType {
    BODYWEIGHT = "BODYWEIGHT",
    WEIGHT = "WEIGHT",
    TIME = "TIME"
}

export type ExerciseSearchResult = {
    id: number,
    name: string,
    imageUrl: string | null,
    muscleNames: string[],
    machineId: number,
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

export type ExerciseLogDetails = {
    id: string,
    exerciseId: number,
    exerciseName: string,
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
        this.steps = steps;
        this.commonMistakes = commonMistakes;
        this.machineId = machineId;
        this.trainedMuscleIds = trainedMuscleIds;
        this.repType = repType;

        if(videoUrl?.indexOf('http://localhost') !== -1) {
            this.videoUrl = videoUrl ? videoUrl?.replace(/http:\/\/localhost:[0-9]+/, process.env.EXPO_PUBLIC_BACKEND_URL || "") : null;
        } else {
            this.videoUrl = videoUrl;
        }
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

    public async addLogItem(data: ExerciseLogData, date?: Date): Promise<void> {
        return dataService.addExerciseLogItem({
            id: uuid.v4(),
            exerciseId: this.id,
            exerciseName: this.name,
            date: date || new Date(),
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