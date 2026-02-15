"use client";

import YouTube from "react-youtube";
import { Button } from "../ui/button";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
const VideoPlayer = ({ youtubeId }) => {
  const [isvisible, setIsVisible] = useState(true);

  const hendleButton = () => {
    setIsVisible((prevState) => !prevState);
  };

  const option = {
    height: 250,
    width: 350,
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0 m-2">
        <Button onClick={hendleButton} className="mb-2">
          <EyeClosedIcon />
        </Button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
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
