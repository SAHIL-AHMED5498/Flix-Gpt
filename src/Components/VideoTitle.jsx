import React from 'react'
import useMoviesContext from '../utils/useMoviesContext'

const VideoTitle = ({ title, overview }) => {
  const { trailer } = useMoviesContext()

  const handleClick = () => {
    if (trailer?.key) {
      window.open(
        `https://www.youtube.com/watch?v=${trailer.key}`,
        "_blank"
      )
    }
  }

  const handleClick2 = (movieName) => {
    const query = encodeURIComponent(
      `${movieName} site:en.wikipedia.org`
    )
    const url = `https://www.google.com/search?q=${query}`
    window.open(url, "_blank")
  }

  return (
    <div
      className="
        absolute
        top-0
        left-0
        w-full
        h-[220px]
        sm:h-auto
        sm:aspect-video
        text-white
        bg-gradient-to-r
        from-black/90
        via-black/50
        to-transparent
        sm:pl-8
        pl-2
        pt-16
        sm:pt-20
      "
    >
      <h1
        className="
          text-xl
          sm:text-5xl
          font-bold
          font-sans
          pb-3
        "
      >
        {title}
      </h1>

      <p
        className="
          hidden
          sm:block
          w-1/3
          text-sm
          text-gray-200
          leading-relaxed
          line-clamp-3
        "
      >
        {overview}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          className="
            px-4
            py-2
            bg-white
            text-black
            rounded-md
            font-semibold
          "
          onClick={handleClick}
        >
          ▶ Play
        </button>

        <button
          className="
            px-4
            py-2
            bg-gray-700
            text-white
            rounded-md
          "
          onClick={() => handleClick2(title)}
        >
          ℹ Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle