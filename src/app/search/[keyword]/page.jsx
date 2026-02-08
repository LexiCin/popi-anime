import Image from "next/image";
import ListAnime from "~/components/pages/ListAnime";

const Search = async ({ params }) => {
  // search params
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/anime?q=${keyword}`,
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* top anime */}
      <section>
        <ListAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Search;
