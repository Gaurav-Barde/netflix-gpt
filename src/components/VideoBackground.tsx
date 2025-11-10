import type { MovieVideo } from "../types/types";
import { YOUTUBE_EMBED_URL } from "../utils/constants";

interface VideoBackgroundProps {
  video: MovieVideo | null;
}

const VideoBackground = ({ video }: VideoBackgroundProps) => {
  if (!video) {
    return <p>Loading...</p>;
  }
  const { key } = video;
  return (
    <div className="absolute top-0 left-0 bottom-0 w-full overflow-x-hidden">
      <iframe
        className="w-full h-full sm:aspect-video sm:h-auto"
        src={YOUTUBE_EMBED_URL(key)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="absolute top-0 left-0 bg-gray-900/30 w-full aspect-video"></div>
    </div>
  );
};

export default VideoBackground;
