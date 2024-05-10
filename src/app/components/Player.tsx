"use client";

import { useEffect, useRef } from "react";

interface PlayerProps {
  initialTime: number;
  endTime: number;
}

const Player = ({ initialTime, endTime }: PlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = initialTime;

      const intervalId = setInterval(() => {
        if (audioRef.current && audioRef.current.currentTime >= endTime) {
          audioRef.current.pause();
          audioRef.current.currentTime = initialTime;
          clearInterval(intervalId);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [initialTime, endTime]);

  return (
    <div className="flex justify-center mt-10">
      <div className="fixed w-[320px] px-4 sm:w-[700px] shadow-lg z-50">
        <audio className="w-full" ref={audioRef} controls>
          <source src="/audioFile.wav" type="audio/wav" />
        </audio>
      </div>
    </div>
  );
};

export default Player;
