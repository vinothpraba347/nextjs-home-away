import { Button } from "@/components/ui/button";
import React from "react";

export default function Homepage() {
  return (
    <>
      <h1 className="text-3xl">Homepage</h1>
      <Button variant="outline" size="lg" className="capitalize m-8">
        Click me
      </Button>
    </>
  );
}
