"use client";
import { Button } from "@/components/ui/button";

export default function Auth() {
  // DRAW
  return (
    <div>
      <Button
        onClick={() => {
          console.log("Tes");
        }}
      >
        Click to target batista
      </Button>
    </div>
  );
}
