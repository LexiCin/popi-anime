"use client";

import { useEffect, useState } from "react";
import ListAnime from "~/components/pages/ListAnime";
import HeaderPage from "~/components/utils/HeaderPage";
import PaginationUtils from "~/components/utils/PaginationUtils";

const TopAnime = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/top/anime?page=${page}`,
    );
    const data = await response.json();
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
        < PaginationUtils
          page={page} 
          lastPage={anime?.pagination?.last_visible_page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default TopAnime;
