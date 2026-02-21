import Link from "next/link";
import SearchInput from "../utils/SearchInput";
import UserAuth from "../utils/UserAuth";

const Header = () => {
  return (
    <header className="bg-primary p-2">
      <div>
        <div>
          <Link href="/" className="text-accent text-2xl lg:text-3xl font-bold">
            Popi Anime
          </Link>
        </div>
        <SearchInput />
        <UserAuth />
      </div>
    </header>
  );
};

export default Header;
