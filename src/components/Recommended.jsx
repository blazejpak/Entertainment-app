import { useEffect, useState } from "react";

import { useDataContext } from "../context/DataContext";

import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as BookmarkedEmptyIcon } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkedIcon } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as PlayIcon } from "../assets/icon-play.svg";

const Recommended = ({ item }) => {
  const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);
  const [isHover, setIsHover] = useState(false);

  const { toggleBookmarked, dataLoaded } = useDataContext();

  const bookmarkHandler = () => {
    toggleBookmarked(item.title);
  };

  useEffect(() => {
    setIsBookmarked(item.isBookmarked);
  }, [item.isBookmarked]);

  return (
    <div>
      <div
        className="relative transition-all hover:scale-105"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <img
          src={item.thumbnail.regular.small}
          className="h-[110px] w-[164px] rounded-lg  hover:opacity-60 md:hidden"
        />
        <img
          src={item.thumbnail.regular.medium}
          className="hidden h-[140px] w-[220px] rounded-lg  hover:opacity-60 md:block lg:hidden"
        />
        <img
          src={item.thumbnail.regular.large}
          className="hidden h-[174px] w-[280px] rounded-lg  hover:opacity-60 lg:block"
        />
        <div
          className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  justify-center opacity-0  ${
            isHover ? "opacity-100" : ""
          }`}
        >
          <div className="flex h-12 w-[120px] cursor-pointer items-center justify-center gap-4 rounded-3xl bg-white/25">
            <PlayIcon />
            <h3 className="text-lg">Play</h3>
          </div>
        </div>
        <div className="bg absolute right-1 top-1 h-8 w-8 rounded-full bg-black/20 transition-transform hover:scale-110">
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center  "
            onClick={bookmarkHandler}
          >
            {isBookmarked ? <BookmarkedIcon /> : <BookmarkedEmptyIcon />}
          </div>
        </div>
      </div>
      <div className="mt-2 flex  items-center gap-2 text-xs font-light opacity-75 md:text-sm">
        <p>{item.year}</p>
        <div className="h-[2px] w-[2px] rounded-full bg-white"></div>
        <div className="flex items-center gap-1">
          <MovieIcon />
          <p>{item.category}</p>
        </div>
        <div className="h-[2px] w-[2px] rounded-full bg-white"></div>
        <p>{item.rating}</p>
      </div>
      <h3 className="mt-1 text-sm md:text-lg">{item.title}</h3>
    </div>
  );
};

export default Recommended;
