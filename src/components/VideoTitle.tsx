import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Button from "./Button";

interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="relative z-100">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="mt-4 mb-8 text-gray-200  md:w-3/12">{overview}</p>
      <div className="flex gap-4">
        <Button title="Play" icon={FaPlay} className="bg-white" />
        <Button
          title="More Info"
          icon={IoIosInformationCircleOutline}
          className="bg-white/30"
        />
      </div>
    </div>
  );
};

export default VideoTitle;
