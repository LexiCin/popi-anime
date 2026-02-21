"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  const handleButton = (event) => {
    event.preventDefault();

    router.back();
  };

  return (
    <div className="flex flex-wrap flex-col text-accent justify-center items-center p-2 min-h-screen gap-3">
      <header className="text-8xl animate-bounce">
        <h1>404</h1>
      </header>
      <h2 className="text-2xl font-bold"> Page Not Found </h2>
      <p className="text-accent/35 text-lg">
        You can for the page you want here or retum to the previous page.
      </p>
      <Button className="hover:cursor-pointer" onClick={handleButton}>
        <ArrowLeft /> Go Back
      </Button>
    </div>
  );
}
