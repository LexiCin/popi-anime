import Image from "next/image";
import ListAnime from "~/components/pages/ListAnime";
import HeaderAnime from "~/components/utils/HeaderAnime";
import { getAnimeReusable, getNestedAnimeResaponse, reproduceData } from "~/lib/api-libs";
export default async function Home() {
  const topAnime = await getAnimeReusable("top/anime", "limit=12");
  let recomendedAnime = await getNestedAnimeResaponse(
    "recommendations/anime",
    "entry",
  );
  recomendedAnime = reproduceData(recomendedAnime, 8)
  return (
    <>
      {/* top anime */}
      <section>
        <HeaderAnime
          title="Top Anime"
          LinkTitle="Show all"
          LinkHref="/top/anime"
        />
        <ListAnime api={topAnime} key={topAnime.mal_id} />
      </section>
      {/* recommended anime */}
      <section className="border-2 rounded m-4">
        <HeaderAnime title="Recomended Anime" />
        <ListAnime api={recomendedAnime} />
      </section>
    </>
  );
}
