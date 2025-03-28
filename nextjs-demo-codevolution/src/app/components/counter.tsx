"use client";

import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  console.log("Counter rendered");
  const [count, setCount] = useState(0);

  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
