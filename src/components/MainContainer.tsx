import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovies from "../hooks/useMovies";

const MainContainer = () => {
  const movies = useMovies();

  if (!movies) {
    return <p>Loading...</p>;
  }

  const { title, overview, movieTrailer } = movies;

  return (
    <div className="px-16 py-[10%]">
      <VideoTitle
        title={title}
        overview={overview || "No overview available"}
      />
      <VideoBackground video={movieTrailer || null} />
    </div>
  );
};

export default MainContainer;
