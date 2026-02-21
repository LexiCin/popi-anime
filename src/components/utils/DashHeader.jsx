"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function DashHeader({ title }) {
    const router = useRouter()

    const handleButton = (event) => {
        event.preventDefault()
        router.back()
    }
  return (
    <>
      <div className="flex justify-between items-center text-lg gap-3">
        <Button className="hover:cursor-pointer" onClick={handleButton}>
        <ArrowLeft className="text-secondary mb-2 " />
        </Button>
        <h1 className="font-bold md:text-lg lg:text-2xl text-accent">
          {title}
        </h1>
      </div>
    </>
  );
}
