import { ExerciseSearchResult } from "@/types/exercise";

const mockExercises: ExerciseSearchResult[] = [
    { id: 10, name: "test1", muscleNames: ["testus"], imageUrl: "https://legacy.reactjs.org/logo-og.png"},
    { id: 11, name: "test2", muscleNames: ["testus"], imageUrl: "https://legacy.reactjs.org/logo-og.png"},
    { id: 12, name: "", muscleNames: [], imageUrl: ""}
];

export default mockExercises;