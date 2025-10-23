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
    <div>
      <iframe
        width="560"
        height="315"
        src={YOUTUBE_EMBED_URL(key)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
