export type MuscleProps = {
    id: number;
    name: string;
    machineIds: number[];
    exerciseIds: number[];
}

export class Muscle {
    id: number;
    name: string;
    machineIds: number[];
    exerciseIds: number[];

    constructor({
        id,
        name,
        machineIds,
        exerciseIds
    }: MuscleProps) {
        this.id = id;
        this.name = name;
        this.machineIds = machineIds;
        this.exerciseIds = exerciseIds;
    }
}