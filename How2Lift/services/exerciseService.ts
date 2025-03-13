import { MachineSearchResult } from "@/types/machine";
import { requestService } from "./requestService";
import { ExerciseSearchResult } from "@/types/exercise";
import { videoToImage } from "@/util/videoToImage";

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
        console.log(response)
        // Convert all exercise data with Promise.all to properly handle async operations
        const responseAdapted: ExerciseSearchResult[] = await Promise.all(
            response.map(async (element) => {
                let imageUrl = null;
                if(element.videoUrl) {
                    const imageFile = await videoToImage(element.videoUrl);
                    imageUrl = URL.createObjectURL(imageFile);
                    console.log(imageFile);
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
}