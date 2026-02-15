"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

//! image hitam putih: brightness-60 grayscale dark:brightness-40

const ListAnime = ({ api }) => {
  const [isSmallScren, setIsSmallScren] = useState(false)
  useEffect (() => {
    const checkScreen = () => {
      setIsSmallScren(window.innerWidth  <= 400)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {api?.data?.map((anime, i) => {
        return (
          <Card
            className="relative mx-auto w-full max-w-sm pt-0"
            key={i}
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <Image
              height={320}
              width={430}
              src={anime?.images?.jpg?.image_url || "undifined"}
              alt={anime?.title || "undifined"}
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardAction className="relative flex flex-wrap flex-col">
                <Badge variant="secondary">
                  {isSmallScren? "..." : `Type: ${anime?.type || "unknown"}`}
                </Badge>
              </CardAction>
              <CardTitle>{anime?.title || "undifined"}</CardTitle>
              <CardDescription>
                Episodes: {anime?.episodes || "n/a"} •{" "}
                {anime?.year || "unknown"} {anime?.season || "unknown"}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                href={`/anime/${anime?.mal_id}`}
                className="w-full hover:text-secondary hover:underline shadow-accent text-accent p-1 shadow-md bg-primary rounded text-center "
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ListAnime;
