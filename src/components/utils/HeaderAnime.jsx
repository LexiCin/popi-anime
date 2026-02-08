import Link from "next/link";

const HeaderAnime = ({title , LinkHref , LinkTitle}) => {
  return (
    <>
      <div className="flex justify-center text-center mt-2 text-2xl text-primary underline font-bold lg:text-3xl">
        <h1>{title}</h1>
      </div>
      <Link
        href={LinkHref}
        className="flex justify-end hover:underline mx-4 relative font-bold"
      >
        {LinkTitle}
      </Link>
    </>
  );
};

export default HeaderAnime;
