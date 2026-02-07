import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

async function LoadingPage() {
  const response = await fetch(
    `${process.env.NEXR_PUBLIC_API_URL}/top/anime?limit=12`,
  );
  const anime = await response.json();
  return (
    <>
      <div className="flex justify-center mt-2 text-2xl text-primary underline font-bold lg:text-3xl">
        <h1>Top Anime</h1>
      </div>
      <Link
        href="/top/anime"
        className="flex justify-end hover:underline mx-4 relative"
      >
        Show all
      </Link>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2 py-2 px-2">
        {anime?.data.map((item) => {
          return (
            <Skeleton
              key={item.mal_id}
              className="relative mx-auto w-full max-w-sm pt-0 justify-center overflow-hidden"
            >
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <CardHeader>
                  <CardContent>
                    <Skeleton className="relative z-20 aspect-video w-full object-cover" />
                  </CardContent>
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardFooter>
                  <Skeleton className="h-4 w-2/3" />
                </CardFooter>
              </Card>
            </Skeleton>
          );
        })}
      </div>
    </>
  );
}

export default LoadingPage;
