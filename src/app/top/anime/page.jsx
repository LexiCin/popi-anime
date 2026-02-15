"use client";

import { useEffect, useState } from "react";
import { getAnimeReusable } from "~/lib/api-libs";
import ListAnime from "~/components/pages/ListAnime";
import HeaderPage from "~/components/utils/HeaderPage";
import PaginationUtils from "~/components/utils/PaginationUtils";

const TopAnime = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeReusable("top/anime", `page=${page}`);
    setAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderPage titlePage={`Page #${page}`} />
      <ListAnime api={anime} />
      <footer>
        <PaginationUtils
          page={page}
          lastPage={anime?.pagination?.last_visible_page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default TopAnime;
