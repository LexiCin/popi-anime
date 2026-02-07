import Image from "next/image";
import Link from "next/link";
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

const ListAnime = ({ id, title, image, episode, year, season, type }) => {
  return (
    <div className="relative mx-auto w-full max-w-sm pt-0 justify-center overflow-hidden">
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <Image
          height={320}
          width={430}
          src={image || "undifined"}
          alt={title || "undifined"}
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Type: {type || "unknown"}</Badge>
          </CardAction>
          <CardTitle>{title || "undifined"}</CardTitle>
          <CardDescription>
            Episodes: {episode || "n/a"} • {year || "unknown"}{" "}
            {season || "unknown"}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href={`/anime/${id}`}
            className="w-full hover:text-secondary hover:underline shadow-accent text-accent p-1 shadow-md bg-primary rounded text-center "
          >
            View Details
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListAnime;
