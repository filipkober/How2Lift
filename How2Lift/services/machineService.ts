import { MachineSearchResult } from "@/types/machine";
import { requestService } from "./requestService";

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
}