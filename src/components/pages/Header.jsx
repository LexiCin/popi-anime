import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
const Header = () => {
  return (
    <header className="bg-primary p-2">
      <div>
        <div className="p-2">
        <Link href="/" className="text-accent text-2xl lg:text-3xl">
          Popi Anime
        </Link>
        </div>
        <Field orientation="horizontal" className="mt-2">
          <Input type="search" placeholder="Search..."  className="text-secondary" />
          <Button className="hover:cursor-pointer">Search</Button>
        </Field>
      </div>
    </header>
  );
};

export default Header;
