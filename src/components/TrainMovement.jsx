import React, { useState, useEffect, useRef } from "react";
import Train from "../assets/icon/Train_00000119096824111344865780000018328572541238206907_.png";

const TrainMovement = () => {
  const [trainPosition, setTrainPosition] = useState(-200); 
  const trainRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);
  const trainWidth = useRef(250); 

  useEffect(() => {
    const updateWindowWidth = () => {
      windowWidth.current = window.innerWidth;
    };

    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const moveTrain = () => {
      setTrainPosition(
        (prev) => (prev > windowWidth.current ? -trainWidth.current : prev + 2) // Reset when fully out
      );
      animationFrameId = requestAnimationFrame(moveTrain);
    };

    animationFrameId = requestAnimationFrame(moveTrain);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-10 overflow-hidden transition-colors duration-300 bg-[#006B14]">
      <img
        ref={trainRef}
        src={Train}
        alt="Train"
        className="absolute bottom-0 h-6"
        style={{ left: `${trainPosition}px`, width: `${trainWidth.current}px` }}
      />
    </div>
  );
};

export default TrainMovement;
