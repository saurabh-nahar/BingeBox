export const profileUrl = "https://occ-0-70-1723.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
export const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_TMDB_API_READ_ACCESS}`
    }
  };