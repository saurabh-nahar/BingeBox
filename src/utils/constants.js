export const bg_Image =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/ed3169bc-bae8-4c49-80ed-bab82d071166/CA-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const profileUrl =
  "https://occ-0-70-1723.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";
export const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_READ_ACCESS}`,
  },
};
export const cardImg = "https://image.tmdb.org/t/p/w400/";
