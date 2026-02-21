import Link from "next/link";
import { authUSerSession } from "~/lib/auth-libs";

const UserAuth = async () => {
  const user = await authUSerSession();
  const titleAction = user ? "Sign out" : "Sign in";
  const LinkAction = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-start items-start text-secondary m-1 font-bold gap-3">
      {user ? <Link href="/users/dashboard">Dashboard</Link> : null}
      <Link href={LinkAction} className="hover:underline">
        {titleAction}
      </Link>
    </div>
  );
};

export default UserAuth;
