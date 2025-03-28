"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="flex items-center justify-center h-screen text-red-500">
        Error fetching users data!
      </h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
