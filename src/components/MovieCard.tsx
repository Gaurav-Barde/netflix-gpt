import { IMAGE_CDN_URL } from "../utils/constants";

type MovieCardProps = {
  posterPath: string;
};

const MovieCard = ({ posterPath }: MovieCardProps) => {
  if (!posterPath) return null;

  return (
    <div className="flex-none w-full h-60 sm:w-56">
      <img
        className="w-full h-full rounded-sm"
        alt="movie card"
        src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
