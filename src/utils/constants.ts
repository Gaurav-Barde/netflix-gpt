export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d44b8e7c-e52b-45bc-9568-7d009f91c9ee/web/IN-en-20250929-TRIFECTA-perspective_82a31bf9-6c15-4866-9ba4-fed503316d1d_large.jpg";

export const USER_AVATAR_URL =
  "https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const MY_PERSONAL_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/20964759?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmE4MTczY2VmZjJhOGUzZDdiNDMzNGJkMjg0NjRiOSIsIm5iZiI6MTc2MDY4ODU1MC4xMjgsInN1YiI6IjY4ZjFmOWE2NDFhZGViNmZiOTc3ZGExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AEq8TeV7fYAranIxsSI84hW4VqCsmMdGbNVZSt2MOA",
  },
};

export const NOW_PLAYING_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MOVIE_VIDEOS_URL = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos`;

export const YOUTUBE_EMBED_URL = (videoKey: string) =>
  `https://www.youtube.com/embed/${videoKey}?si=cj8MZ17mpX5jCKyW`;
