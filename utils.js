export const makePhotoUrl = (path, size = 500) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};

export const posterFilter = (content) => content.poster_path != null;
