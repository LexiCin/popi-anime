import Image from "next/image";
import ListAnime from "~/components/pages/ListAnime";
import HeaderAnime from "~/components/utils/HeaderAnime";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/top/anime?limit=12`,
  );
  const topAnime = await response.json();
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
        <HeaderAnime
          title="Random Anime"
        />
        <ListAnime api={topAnime} key={topAnime.mal_id} />
      </section>
    </>
  );
}
