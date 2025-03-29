import { MachineSearchResult } from "@/types/machine";
import { requestService } from "./requestService";
import { Exercise, ExerciseSearchResult } from "@/types/exercise";
import { Muscle } from "@/types/muscle";

type GetAllType = Omit<MachineSearchResult, 'imageUrl'> & { videoUrl: string };

export class ExerciseService {
    public async getAllExercises(): Promise<ExerciseSearchResult[]> {
        const response: GetAllType[] = await requestService.handleRequest({
            url: '/exercises',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });
        // Convert all exercise data with Promise.all to properly handle async operations
        const responseAdapted: ExerciseSearchResult[] = await Promise.all(
            response.map(async (element) => {
                let imageUrl = null;
                if(element.videoUrl) {
                    imageUrl = element.videoUrl+'/thumbnail'
                }
                return {
                    id: element.id,
                    name: element.name,
                    imageUrl: imageUrl,
                    muscleNames: element.muscleNames
                };
            })
        );
        
        return responseAdapted;
    }
    public async getExerciseById(id: number): Promise<Exercise | null> {
        const response: Exercise = await requestService.handleRequest({
            url: `/exercises/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });
        if (response) {
            return new Exercise(response);
        }
        return null;
    }

    public async getMusclesByExerciseId(id: number): Promise<Muscle[]> {
        const response: Muscle[] = await requestService.handleRequest({
            url: `/exercises/${id}/muscles`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        });
        return response.map(muscle => new Muscle(muscle));
    }
}

const globalExerciseService = global as unknown as { exerciseService: ExerciseService };

export const exerciseService = globalExerciseService.exerciseService || new ExerciseService();