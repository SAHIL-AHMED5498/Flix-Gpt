import React from "react";

const VideoBackground = ({ trailer }) => {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <iframe
        className="absolute inset-0 h-full w-full scale-[1.35] sm:scale-[1.18] lg:scale-110"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&rel=0&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />
    </div>
  );
};

export default VideoBackground;
