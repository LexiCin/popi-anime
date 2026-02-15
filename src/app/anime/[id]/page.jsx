import Image from "next/image";
import Link from "next/link";
import { getAnimeReusable } from "~/lib/api-libs";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import VideoPlayer from "~/components/utils/VideoPlayer";

const Page = async ({ params }) => {
  const { id } = await params;

  const detailsCard = await getAnimeReusable(`anime/${id}`);
  return (
    <div className="flex justify-center items-center min-h-screen mt-2 flex-col">
      <Card className="relative mx-auto w-full max-w-sm pt-0 ">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <Image
          width={320}
          height={430}
          src={detailsCard.data?.images?.jpg?.image_url || "N/A"}
          alt={detailsCard?.data?.title || "N/A"}
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">
              Type: {detailsCard?.data?.type || "N/A"}
            </Badge>
          </CardAction>
          <CardTitle>{detailsCard.data.title || "N/A"}</CardTitle>
          <CardDescription>
            {detailsCard?.data?.source || "unknown"} {" "}
            Episodes: {detailsCard?.data?.episodes || "N/A"} •{" "}
            {detailsCard?.data?.year || "N/A"}{" "}
            {detailsCard?.data?.season || "N/A"}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <CardDescription>
            <CardTitle>synopsis:</CardTitle>
            {detailsCard?.data?.synopsis || "N/A"}
            {" "}<Link href={detailsCard?.data?.url}>[Lear more]</Link>
          </CardDescription>
        </CardFooter>
        <CardTitle className="mx-2">Broadcast:</CardTitle>
        <CardContent>
          Day: {detailsCard.data?.broadcast?.day || "unknown day"} •{" "}
          {detailsCard.data?.broadcast?.time || "unknown time"} |{" "}
          {detailsCard.data?.broadcast?.timezone || "unknown timezone"} |{" "}
          {detailsCard.data?.broadcast?.string || "unknown string"}
        </CardContent>
      </Card>
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
};
export default Page;
