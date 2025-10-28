import { IMAGE_CDN_URL } from "../utils/constants";

type MovieCardProps = {
  posterPath: string;
};

const MovieCard = ({ posterPath }: MovieCardProps) => {
  return (
    <div className="flex-none w-56 h-60">
      <img
        className="w-full h-full rounded-sm"
        alt="movie card"
        src={IMAGE_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
