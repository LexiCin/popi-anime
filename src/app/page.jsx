import Image from "next/image";
import ListAnime from "~/components/pages/ListAnime";
import HeaderAnime from "~/components/utils/HeaderAnime";
import { getAnimeReusable } from "./libs/api-libs";
export default async function Home() {
  const topAnime = await getAnimeReusable("top/anime", "limit=12");
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
      {/* random anime */}
      <section>
        <HeaderAnime title="Random Anime" />
        <ListAnime api={topAnime} key={topAnime.mal_id} />
      </section>
    </>
  );
}
