import Image from "next/image";
import ListAnime from "~/components/pages/ListAnime";
import HeaderAnime from "~/components/utils/HeaderAnime";

const Search = async ({ params }) => {
  // search params
  const { keyword } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/anime?q=${keyword}`,
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* Search anime */}
      <section>
        <HeaderAnime title={`Search Result: ${decodeURI(keyword)}`} />
        <ListAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Search;
