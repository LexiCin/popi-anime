export const getAnimeReusable = async (resource , query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/${resource}?${query}`,
  );
  const data = response.json();
  return data;
};
