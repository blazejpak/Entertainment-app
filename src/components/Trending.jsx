import { useState } from "react";

import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";
import { ReactComponent as BookmarkedEmptyIcon } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkedIcon } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as PlayIcon } from "../assets/icon-play.svg";

const Trending = ({ item }) => {
  const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);

  const bookmarkHandler = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div className="relative mr-4 inline-block  ">
      <img
        src={item.thumbnail.trending.small}
        alt={item.title}
        className="block h-[120px] w-[240px] rounded-lg transition-opacity hover:opacity-60 md:hidden "
      />
      <img
        src={item.thumbnail.trending.large}
        alt={item.title}
        className="hidden h-[230px] w-[470px] rounded-lg transition-opacity hover:opacity-60 md:block "
      />
      <div className="absolute left-0 top-0 flex h-full w-full  items-center justify-center opacity-0 hover:opacity-100">
        <div className="flex h-12 w-[120px] cursor-pointer items-center justify-center gap-4 rounded-3xl bg-white/25">
          <PlayIcon />
          <h3 className="text-lg">Play</h3>
        </div>
      </div>

      <div className="absolute bottom-2 left-2">
        <div className="flex gap-4 text-xs font-light md:text-base">
          <p>{item.year}</p>
          <div className="flex items-center gap-1">
            <MovieIcon />
            <p>{item.category}</p>
          </div>
          <p>{item.rating}</p>
        </div>
        <h2 className="text-sm md:text-2xl">{item.title}</h2>
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
  );
};

export default Trending;
