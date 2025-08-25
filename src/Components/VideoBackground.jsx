import React, { useEffect, useState } from 'react'




const VideoBackground = ({trailer}) => {

  //console.log("video background rendered")




  return (
    <div className="bg-green-100 relative w-screen ">
  <iframe
    className="w-screen aspect-video"
    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
    
  )
}

export default VideoBackground
