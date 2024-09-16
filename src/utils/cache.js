export const fetchData = async (url, cacheKey) => {
  // Check if data is cached using the specific cacheKey
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    console.log(`Returning cached data for ${cacheKey}`);
    return JSON.parse(cachedData);
  }

  // Fetch data from the dynamic API URL
  console.log(`Fetching new data from ${url}`);
  const response = await fetch(url);
  const data = await response.json();

  // Cache data with the specified cacheKey
  localStorage.setItem(cacheKey, JSON.stringify(data));

  return data;
};

export const clearCache = (cacheKey) => {
  localStorage.removeItem(cacheKey);
  console.log(`Cache cleared for ${cacheKey}`);
};
