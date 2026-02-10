import Link from "next/link";

const HeaderAnime = ({ title, LinkHref, LinkTitle }) => {
  return (
    <>
      <div className="text-center items-center mt-2 text-2xl text-primary font-bold lg:text-3xl">
        <h1>{title}</h1>
      </div>
      {LinkHref && LinkTitle ? (
        <Link
          href={LinkHref}
          className="flex justify-end hover:underline mx-4 relative font-bold"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </>
  );
};

export default HeaderAnime;
