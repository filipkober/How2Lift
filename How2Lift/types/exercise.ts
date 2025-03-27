import { machineService } from './../services/machineService';
import { ExerciseService } from "@/services/exerciseService"
import { Machine } from "./machine"
import { Muscle } from "./muscle"

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
    trainedMuscleIds: number[]
}

export class Exercise {
    id: number;
    name: string;
    description: string;
    videoUrl: string | null;
    steps: string[];
    commonMistakes: string[];
    machineId: number;
    trainedMuscleIds: number[];

    

    constructor({
        id,
        name,
        description,
        videoUrl,
        steps,
        commonMistakes,
        machineId,
        trainedMuscleIds
    }: ExerciseProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.videoUrl = videoUrl;
        this.steps = steps;
        this.commonMistakes = commonMistakes;
        this.machineId = machineId;
        this.trainedMuscleIds = trainedMuscleIds;
    }

    getMachine = async (): Promise<Machine | null> => {
        return machineService.getMachineById(this.machineId);
    }

    getTrainedMuscles = async (): Promise<Muscle[]> => {
        return new ExerciseService().getMusclesByExerciseId(this.id);
    }

}