const TMDB_API_KEY = "24d1a324c0773eef7692ac8e0aa3eb02";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const isServerless = typeof process !== "undefined" && process.env?.VERCEL;
const sampleMovies = [
  {
    id: 550,
    title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
    release_date: "1999-10-15",
    vote_average: 8.8,
    vote_count: 26280,
    genre_ids: [18],
    adult: false,
    original_language: "en",
    original_title: "Fight Club",
    popularity: 61.416,
    video: false
  },
  {
    id: 13,
    title: "Forrest Gump",
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events.",
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop_path: "/yE5d3BUhE8hCnkMUJOo1UnDojh2.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
    vote_count: 24593,
    genre_ids: [35, 18],
    adult: false,
    original_language: "en",
    original_title: "Forrest Gump",
    popularity: 61.416,
    video: false
  },
  {
    id: 238,
    title: "The Godfather",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    release_date: "1972-03-14",
    vote_average: 9.2,
    vote_count: 18923,
    genre_ids: [18, 80],
    adult: false,
    original_language: "en",
    original_title: "The Godfather",
    popularity: 61.416,
    video: false
  }
];
const sampleActors = [
  {
    id: 31,
    name: "Tom Hanks",
    profile_path: "/pQFoyx7rp09CJTAb932F2g8Nlho.jpg",
    known_for_department: "Acting",
    popularity: 84,
    known_for: [
      {
        id: 13,
        title: "Forrest Gump",
        overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events.",
        poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        backdrop_path: "/yE5d3BUhE8hCnkMUJOo1UnDojh2.jpg",
        release_date: "1994-07-06",
        vote_average: 8.8,
        vote_count: 24593,
        genre_ids: [35, 18],
        adult: false,
        original_language: "en",
        original_title: "Forrest Gump",
        popularity: 61.416,
        video: false
      }
    ]
  },
  {
    id: 62,
    name: "Bruce Willis",
    profile_path: "/kU3B75TyRiQIBHhsyomZyU0zugn.jpg",
    known_for_department: "Acting",
    popularity: 78,
    known_for: [
      {
        id: 550,
        title: "Fight Club",
        overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.",
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdrop_path: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
        release_date: "1999-10-15",
        vote_average: 8.8,
        vote_count: 26280,
        genre_ids: [18],
        adult: false,
        original_language: "en",
        original_title: "Fight Club",
        popularity: 61.416,
        video: false
      }
    ]
  },
  {
    id: 2888,
    name: "Will Smith",
    profile_path: "/6a6cl8Yj7Yz0K8QYdXkXqQZQZQZQ.jpg",
    known_for_department: "Acting",
    popularity: 82,
    known_for: [
      {
        id: 238,
        title: "The Godfather",
        overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
        poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        release_date: "1972-03-14",
        vote_average: 9.2,
        vote_count: 18923,
        genre_ids: [18, 80],
        adult: false,
        original_language: "en",
        original_title: "The Godfather",
        popularity: 61.416,
        video: false
      }
    ]
  }
];
async function fetchTrendingMovies() {
  try {
    if (isServerless) {
      console.log("Running in serverless environment, using sample data");
      return sampleMovies;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5e3);
    const response = await fetch(
      `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn("Failed to fetch trending movies, using sample data:", error);
    return sampleMovies;
  }
}
async function fetchPopularMovies() {
  try {
    if (isServerless) {
      console.log("Running in serverless environment, using sample data");
      return sampleMovies;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5e3);
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn("Failed to fetch popular movies, using sample data:", error);
    return sampleMovies;
  }
}
async function fetchTopRatedMovies() {
  try {
    if (isServerless) {
      console.log("Running in serverless environment, using sample data");
      return sampleMovies;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5e3);
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn("Failed to fetch top rated movies, using sample data:", error);
    return sampleMovies;
  }
}
async function fetchNowPlayingMovies() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn("Failed to fetch now playing movies, using sample data:", error);
    return sampleMovies;
  }
}
async function fetchMovieDetails(movieId) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=credits,videos,images`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn("Failed to fetch movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
}
async function fetchMovieCredits(movieId) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn("Failed to fetch movie credits:", error);
    throw new Error("Failed to fetch movie credits");
  }
}
async function searchMovies(query) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn("Failed to search movies:", error);
    return {
      page: 1,
      results: sampleMovies,
      total_pages: 1,
      total_results: sampleMovies.length
    };
  }
}
async function fetchPopularActors() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/person/popular?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleActors;
  } catch (error) {
    console.warn("Failed to fetch popular actors, using sample data:", error);
    return sampleActors;
  }
}
async function fetchActorDetails(actorId) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/person/${actorId}?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn("Failed to fetch actor details:", error);
    throw new Error("Failed to fetch actor details");
  }
}
async function fetchActorCredits(actorId) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1e4);
    const response = await fetch(
      `${TMDB_BASE_URL}/person/${actorId}/movie_credits?api_key=${TMDB_API_KEY}`,
      {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "User-Agent": "Friday-Masala-Movie-App/1.0"
        }
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn("Failed to fetch actor credits:", error);
    throw new Error("Failed to fetch actor credits");
  }
}
function getImageUrl(path, size = "w500") {
  if (!path) return "/placeholder-movie.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
function getBackdropUrl(path, size = "w1280") {
  if (!path) return "/placeholder-backdrop.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export { fetchActorCredits as a, fetchPopularActors as b, fetchMovieDetails as c, fetchMovieCredits as d, getBackdropUrl as e, fetchActorDetails as f, getImageUrl as g, fetchNowPlayingMovies as h, fetchPopularMovies as i, fetchTopRatedMovies as j, fetchTrendingMovies as k, searchMovies as s };
