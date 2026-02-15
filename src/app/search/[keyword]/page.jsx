import Image from "next/image";
import { getAnimeReusable } from "~/app/libs/api-libs";
import ListAnime from "~/components/pages/ListAnime";
import HeaderAnime from "~/components/utils/HeaderAnime";

const Search = async ({ params }) => {
  // search params
  const { keyword } = await params;
  const searchAnime = await getAnimeReusable("anime", `q=${keyword}`);

  return (
    <>
      {/* Search anime */}
      <section>
        <HeaderAnime title={`search result: ${decodeURIComponent(keyword)}`} />
        <ListAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Search;
