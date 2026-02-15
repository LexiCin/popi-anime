import Link from "next/link";

const HeaderAnime = ({ title, LinkHref, LinkTitle }) => {
  return (
    <>
      <div className="flex justify-start items-start m-3 text-2xl text-emerald-300 font-bold lg:text-3xl">
        <h1>{title}</h1>
      </div>
      {LinkHref && LinkTitle ? (
        <Link
          href={LinkHref}
          className="flex justify-end hover:underline mx-4 relative text-accent font-bold"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </>
  );
};

export default HeaderAnime;
