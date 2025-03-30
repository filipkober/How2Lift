import { Machine, MachineSearchResult } from "@/types/machine";
import { requestService } from "./requestService";
import { Muscle, MuscleProps } from "@/types/muscle";
import { cacheService } from "./cacheService";
import { Cachable } from "@/types/cache";

export class MuscleService {
    public async getAllMuscles(): Promise<Muscle[]> {
        const cachedMuscles: MuscleProps[] | undefined = await cacheService.get('muscles');
        if (cachedMuscles) {
            return cachedMuscles.map((element: MuscleProps) => new Muscle(element));
        }


        const response =  await requestService.handleRequest({
            url: '/muscles',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });

        const muscles = response.map((element: MuscleProps) => new Muscle(element));
        cacheService.set('muscles', muscles);
        return muscles;
    }        
}

const globalMuscleService = global as unknown as { muscleService: MuscleService };

export const muscleService = globalMuscleService.muscleService || new MuscleService();