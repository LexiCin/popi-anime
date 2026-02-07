import Image from "next/image";
import Link from "next/link";
import ListAnime from "~/components/pages/ListAnime";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXR_PUBLIC_API_URL}/top/anime?limit=12`,
  );
  const anime = await response.json();
  return (
    <>
      <div className="flex justify-center mt-2 text-2xl text-primary underline font-bold lg:text-3xl">
        <h1>Top Anime</h1>
      </div>
      <Link
        href="/top/anime"
        className="flex justify-end hover:underline mx-4 relative"
      >
        Show all
      </Link>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2 py-2 px-2">
        {anime?.data.map((item) => {
          return (
            <div key={item.mal_id}>
              <ListAnime
                id={item?.mal_id}
                title={item?.title}
                image={item?.images.jpg.image_url}
                episode={item?.episodes}
                year={item?.year}
                season={item?.season}
                type={item?.type}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
