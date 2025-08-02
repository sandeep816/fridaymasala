const TMDB_API_KEY = import.meta.env.TMDB_API_KEY || "24d1a324c0773eef7692ac8e0aa3eb02";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Add debugging for serverless environment
const isServerless = typeof process !== 'undefined' && (
  process.env?.VERCEL || 
  process.env?.VERCEL_ENV || 
  process.env?.NODE_ENV === 'production'
);

// Log environment for debugging
if (typeof process !== 'undefined') {
  console.log('Environment detection:', {
    VERCEL: process.env?.VERCEL,
    VERCEL_ENV: process.env?.VERCEL_ENV,
    NODE_ENV: process.env?.NODE_ENV,
    isServerless
  });
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  status: string;
  budget: number;
  revenue: number;
  production_companies: { id: number; name: string; logo_path: string | null }[];
  spoken_languages: { english_name: string; iso_639_1: string }[];
  homepage: string;
  tagline: string;
}

export interface MovieCredits {
  id: number;
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    order: number;
  }[];
  crew: {
    id: number;
    name: string;
    job: string;
    department: string;
    profile_path: string | null;
  }[];
}

export interface SearchResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Actor {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
  popularity: number;
  known_for: Movie[];
}

export interface ActorDetails {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string | null;
  popularity: number;
  known_for_department: string;
  gender: number;
  homepage: string;
  imdb_id: string;
}

export interface ActorCredits {
  id: number;
  cast: {
    id: number;
    title: string;
    character: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    overview: string;
  }[];
}

// Sample movie data for fallback
const sampleMovies: Movie[] = [
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

// Sample actor data for fallback
const sampleActors: Actor[] = [
  {
    id: 31,
    name: "Tom Hanks",
    profile_path: "/pQFoyx7rp09CJTAb932F2g8Nlho.jpg",
    known_for_department: "Acting",
    popularity: 84.0,
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
    popularity: 78.0,
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
    popularity: 82.0,
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

export async function fetchTrendingMovies(): Promise<Movie[]> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return sampleMovies;
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Reduced timeout for serverless
    
    const response = await fetch(
      `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn('Failed to fetch trending movies, using sample data:', error);
    return sampleMovies;
  }
}

export async function fetchPopularMovies(): Promise<Movie[]> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return sampleMovies;
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn('Failed to fetch popular movies, using sample data:', error);
    return sampleMovies;
  }
}

export async function fetchTopRatedMovies(): Promise<Movie[]> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return sampleMovies;
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn('Failed to fetch top rated movies, using sample data:', error);
    return sampleMovies;
  }
}

export async function fetchNowPlayingMovies(): Promise<Movie[]> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return sampleMovies;
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleMovies;
  } catch (error) {
    console.warn('Failed to fetch now playing movies, using sample data:', error);
    return sampleMovies;
  }
}

export async function fetchMovieDetails(movieId: number): Promise<MovieDetails> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      // Return a sample movie details object
      return {
        id: movieId,
        title: "Sample Movie",
        overview: "This is a sample movie for demonstration purposes.",
        poster_path: "/placeholder-movie.jpg",
        backdrop_path: "/placeholder-backdrop.jpg",
        release_date: "2024-01-01",
        vote_average: 7.5,
        vote_count: 1000,
        genre_ids: [28],
        adult: false,
        original_language: "en",
        original_title: "Sample Movie",
        popularity: 50.0,
        video: false,
        genres: [{ id: 28, name: "Action" }],
        runtime: 120,
        status: "Released",
        budget: 1000000,
        revenue: 5000000,
        production_companies: [],
        spoken_languages: [{ english_name: "English", iso_639_1: "en" }],
        homepage: "",
        tagline: "Sample tagline"
      };
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=credits,videos,images`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch movie details:', error);
    throw new Error('Failed to fetch movie details');
  }
}

export async function fetchMovieCredits(movieId: number): Promise<MovieCredits> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return {
        id: movieId,
        cast: [
          {
            id: 1,
            name: "Sample Actor",
            character: "Main Character",
            profile_path: "/placeholder-actor.jpg",
            order: 0
          }
        ],
        crew: [
          {
            id: 2,
            name: "Sample Director",
            job: "Director",
            department: "Directing",
            profile_path: null
          }
        ]
      };
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch movie credits:', error);
    throw new Error('Failed to fetch movie credits');
  }
}

export async function searchMovies(query: string): Promise<SearchResults> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return {
        page: 1,
        results: sampleMovies.filter(movie => 
          movie.title.toLowerCase().includes(query.toLowerCase())
        ),
        total_pages: 1,
        total_results: sampleMovies.length
      };
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn('Failed to search movies:', error);
    return {
      page: 1,
      results: sampleMovies,
      total_pages: 1,
      total_results: sampleMovies.length
    };
  }
}

export async function fetchPopularActors(): Promise<Actor[]> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return sampleActors;
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/person/popular?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results || sampleActors;
  } catch (error) {
    console.warn('Failed to fetch popular actors, using sample data:', error);
    return sampleActors;
  }
}

export async function fetchActorDetails(actorId: number): Promise<ActorDetails> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return {
        id: actorId,
        name: "Sample Actor",
        biography: "This is a sample actor biography for demonstration purposes.",
        birthday: "1980-01-01",
        deathday: null,
        place_of_birth: "Sample City, Country",
        profile_path: "/placeholder-actor.jpg",
        popularity: 50.0,
        known_for_department: "Acting",
        gender: 1,
        homepage: "",
        imdb_id: "nm0000001"
      };
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/person/${actorId}?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch actor details:', error);
    throw new Error('Failed to fetch actor details');
  }
}

export async function fetchActorCredits(actorId: number): Promise<ActorCredits> {
  try {
    if (isServerless) {
      console.log('Running in serverless environment, using sample data');
      return {
        id: actorId,
        cast: [
          {
            id: 1,
            title: "Sample Movie",
            character: "Main Character",
            poster_path: "/placeholder-movie.jpg",
            release_date: "2024-01-01",
            vote_average: 7.5,
            overview: "This is a sample movie for demonstration purposes."
          }
        ]
      };
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(
      `${TMDB_BASE_URL}/person/${actorId}/movie_credits?api_key=${TMDB_API_KEY}`,
      { 
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Friday-Masala-Movie-App/1.0'
        }
      }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch actor credits:', error);
    throw new Error('Failed to fetch actor credits');
  }
}

export function getImageUrl(path: string | null, size: string = "w500"): string {
  if (!path) return "/placeholder-movie.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export function getBackdropUrl(path: string, size: string = "w1280"): string {
  if (!path) return "/placeholder-backdrop.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
} 