import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

async function LoadingPage() {
  const array = new Array(12).fill(null)
  
  return (
    <>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2 py-2 px-2">
        {array?.map((_ , i) => {
          return (
            <Skeleton
              className="relative mx-auto w-full max-w-sm pt-0 justify-center overflow-hidden"
              key={i}
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
