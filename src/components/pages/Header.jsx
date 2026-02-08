import Link from "next/link";
import SearchInput from "../utils/SearchInput";

const Header = () => {
  return (
    <header className="bg-primary p-2">
      <div>
        <div className="p-2">
          <Link href="/" className="text-accent text-2xl lg:text-3xl">
            Popi Anime
          </Link>
        </div>
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
