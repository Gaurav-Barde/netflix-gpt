import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Button from "./Button";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="px-16">
      <h1 className="font-bold text-6xl text-gray-900">{title}</h1>
      <p className="w-3/12 my-4">{overview}</p>
      <div className="flex gap-4">
        <Button
          title="Play"
          icon={FaPlay}
          className="bg-white border-gray-900 border-1"
        />
        <Button
          title="More Info"
          icon={IoIosInformationCircleOutline}
          className="bg-gray-500/50"
        />
      </div>
    </div>
  );
};

export default VideoTitle;
