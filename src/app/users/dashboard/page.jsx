import Link from "next/link";
import { Avatar, AvatarBadge, AvatarImage } from "~/components/ui/avatar";
import { authUSerSession } from "~/lib/auth-libs";

export default async function page() {
  const user = await authUSerSession();
  return (
    <>
      <div className="text-accent flex flex-wrap justify-between items-center p-2 ">
        <Link href="/users/dashboard/collection" className="hover:underline">
          Go collection
        </Link>
        <Link href="/users/dashboard/comment" className="hover:underline">
          Go comment
        </Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center bg-primary p-2">
        <Avatar>
          <AvatarImage
            src={user?.image || "unknown"}
            alt={user?.name || "N/A"}
          />
          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>
        <h1 className="text-secondary font-bold mb:text-lg lg:text-2xl">
          {" "}
          Welcome to the dashboard
        </h1>
        <div className="text-accent/80">
          <h1>👋 Hi {user?.name || "??"}, today realy beutiful...</h1>
        </div>
      </div>
    </>
  );
}
