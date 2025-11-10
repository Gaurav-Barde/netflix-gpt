import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovies from "../hooks/useMovies";

const MainContainer = () => {
  const movies = useMovies();

  if (!movies) {
    return (
      <p className="w-screen h-screen flex justify-center items-center text-6xl">
        Loading...
      </p>
    );
  }

  const { title, overview, movieTrailer } = movies;

  return (
    <div className="px-8 py-[10%] h-[calc(100vh-100px)] bg-gray-800 sm:px-16 sm:h-screen">
      <VideoTitle
        title={title}
        overview={overview || "No overview available"}
      />
      <VideoBackground video={movieTrailer || null} />
    </div>
  );
};

export default MainContainer;
