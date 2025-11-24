import type { Movie } from "../types/types";
import MovieCard from "./MovieCard";

type MovieListProps = {
  title: string;
  movies: Movie[];
};

const MovieList = ({ title, movies }: MovieListProps) => {
  return (
    <div className="mb-12">
      <h1 className="text-white text-3xl mb-4 pl-4">{title}</h1>
      <div className="flex gap-4 overflow-x-auto">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
