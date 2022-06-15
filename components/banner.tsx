import { useState, useEffect } from "react";

import Image from "next/image"
import { Movie } from "../typings"
import { baseUrl } from "../constants/movie";
import {
  FaPlay
} from 'react-icons/fa';
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({
  netflixOriginals,
}: Props) => {
  const [movie, setMovie] = useState<Movie | null>();

  useEffect(() => {
    setMovie(netflixOriginals[
      Math.floor(Math.random() * netflixOriginals.length)
    ]);
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
            <Image 
              src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
              alt={movie?.title}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-md lg:max-w-2xl lg:text-lg">
          {movie?.overview}
        </p>

        <div className="flex space-x-4">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
          </button>
          <button className="bannerButton bg-[gray]/70">
            More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
    </div>
  )
}

export default Banner