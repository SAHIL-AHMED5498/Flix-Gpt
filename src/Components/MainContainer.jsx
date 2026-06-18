import React, { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useMoviesContext from "../utils/useMoviesContext";
import { Thumbnail } from "../Shimmers/Thumbnail";

const MainContainer = ({ mainMovie }) => {
  const { getMovieVideo } = useMoviesContext();
  const [mainTrailer, setMainTrailer] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await getMovieVideo(mainMovie.id);
      setMainTrailer(res);
    };
    fetchMovie();
  }, [mainMovie.id]);

  if (!mainTrailer) {
    return (
      <div className="min-h-[60vh] bg-black pt-24">
        loading video....
        <Thumbnail />
      </div>
    );
  }

  return (
    <section className="relative h-[56.25vw] min-h-[520px] max-h-[88vh] w-full overflow-hidden bg-black">
      {mainTrailer && <VideoBackground trailer={mainTrailer} />}
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
    </section>
  );
};

export default MainContainer;
