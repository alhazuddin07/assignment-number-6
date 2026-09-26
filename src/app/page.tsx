import Banner from "@/components/homepage/Banner";
import ExerciseCard from "./libraryWorkoutCard/page";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Banner />
        <ExerciseCard />
      </Suspense>
    </div>
  );
}