import { Machine, MachineProps, MachineSearchResult } from "@/types/machine";
import { requestService } from "./requestService";
import { Exercise, ExerciseProps } from "@/types/exercise";
import { Muscle, MuscleProps } from "@/types/muscle";
import { CameraCapturedPicture } from "expo-camera";
import { fetch } from "expo/fetch";

export class MachineService {
    public async getAllMachines(): Promise<MachineSearchResult[]> {
        const response =  await requestService.handleRequest({
            url: '/machines',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });

        return response as MachineSearchResult[];
    }

    public async getMachineById(id: number): Promise<Machine | null> {
        const response = await requestService.handleRequest({
            url: `/machines/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });

        if (response) {
            return new Machine(response);
        }
        return null;
    }

    public async getExercisesByMachineId(id: number): Promise<Exercise[]> {
        const response = await requestService.handleRequest({
            url: `/machines/${id}/exercises`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });

        return response.map((e: ExerciseProps) => new Exercise(e)) as Exercise[];
    }

    public async getMusclesByMachineId(id: number): Promise<Muscle[]> {
        const response = await requestService.handleRequest({
            url: `/machines/${id}/muscles`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });

        return response.map((m: MuscleProps) => new Muscle(m)) as Muscle[];
    }

    public async scanMachine(image: CameraCapturedPicture): Promise<Machine[]> {
        try {
            const formData = new FormData();

        if (image.uri) {
            formData.append('file', {
                uri: image.uri,
                name: 'image.jpg',
                type: 'image/jpeg'
            } as any);

        }

        const response = await requestService.handleRequest({
            url: '/ai/machines',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })

        return response.map((m: MachineProps) => new Machine(m)) as Machine[];
        } catch (error) {
            console.error('Error scanning machine:', error);
            throw error;
        }
    }
}

const globalMachineService = global as unknown as { machineService: MachineService };

export const machineService = globalMachineService.machineService || new MachineService();