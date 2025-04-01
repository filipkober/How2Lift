import React, { useState } from "react";
//import { ExerciseLogItem } from "types";

const WorkoutCard = (props: any) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-xl p-4 w-80 border border-gray-300 cursor-pointer"
      onClick={() => setShowDetails(!showDetails)}
    >
      <p className="text-sm text-gray-600">{props.exercie_data.date}</p>
      <h2 className="text-lg font-semibold mt-1">{props.exercie_data.title}</h2>

      {showDetails && (
        <div className="flex items-end mt-2">
          <span className="text-2xl font-bold">{props.exercie_data.reps}x</span>
          <span className="text-2xl font-bold mx-2">{props.exercie_data.weight}</span>
          <span className="text-xl text-gray-600">kg</span>
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;