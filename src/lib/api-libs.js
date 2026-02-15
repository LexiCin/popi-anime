export const getAnimeReusable = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LOCAL_URL}/${resource}?${query}`,
  );
  const data = response.json();
  return data;
};

export const getNestedAnimeResaponse = async (resource, object) => {
  const res = await getAnimeReusable(resource);
  return res.data.flatMap((item) => item[object]);
};

export const reproduceData = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
