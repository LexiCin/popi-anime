"use client";
import ReactPlayer from "react-player";
import { Button } from "../ui/button";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
const VideoPlayer = ({ youtubeId }) => {
  const [isvisible, setIsVisible] = useState(true);

  const hendleButton = () => {
    setIsVisible((prevState) => !prevState);
  };
  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0 m-2">
        <Button onClick={hendleButton} className="mb-2">
          <EyeClosedIcon />
        </Button>
        <ReactPlayer
          src={youtubeId}
          width={350}
          height={250}
          controls={true}
          playing={false}
          onError={() =>
            alert("Video trailer is broken, please try again later...")
          }
        />
      </div>
    );
  };

  return isvisible ? (
    <Player />
  ) : (
    <div className="fixed bottom-0 right-0 m-2">
      <Button onClick={hendleButton} className="mb-2">
        <EyeIcon />
      </Button>
    </div>
  );
};
export default VideoPlayer;
