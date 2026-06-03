import { Suspense } from "react";
import NavigationDemo from "./NavigationDemo";

export default function Demo(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationDemo/>
    </Suspense>
  )
}