"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import DashHeader from "~/components/utils/DashHeader";
import useMobileScreen from "~/hooks/useMobileScreen";

export default function page() {
  const isSmallScren = useMobileScreen();

  return (
    <section className="m-2">
      <DashHeader title="Page collection" />

      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <Image
            height={320}
            width={430}
            src=""
            alt=""
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">
                {isSmallScren ? "..." : `Type: Fall`}
              </Badge>
            </CardAction>
            <CardTitle>Sousou no frieren</CardTitle>
            <CardDescription>Episodes: 1987 • 1789 Fall</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href="/"
              className="w-full hover:text-secondary hover:underline shadow-accent text-accent p-1 shadow-md bg-primary rounded text-center "
            >
              View Details
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
