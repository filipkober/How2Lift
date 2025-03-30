import { Machine, MachineSearchResult } from "@/types/machine";
import { requestService } from "./requestService";
import { Exercise, ExerciseProps } from "@/types/exercise";
import { Muscle, MuscleProps } from "@/types/muscle";

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
}

const globalMachineService = global as unknown as { machineService: MachineService };

export const machineService = globalMachineService.machineService || new MachineService();