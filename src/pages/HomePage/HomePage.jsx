import Search from "../../components/Search";
import Trending from "../../components/Trending";
import Recommended from "../../components/Recommended";

import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { useRef, useState } from "react";
import { useDataContext } from "../../context/DataContext";

const HomePage = () => {
  const slideRef = useRef(null);

  const { dataLoaded } = useDataContext();

  const [search, setSearch] = useState("");

  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const slideLeft = () => {
    slideRef.current.scrollLeft = slideRef.current.scrollLeft - 300;
  };

  const slideRight = () => {
    slideRef.current.scrollLeft = slideRef.current.scrollLeft + 300;
  };

  if (dataLoaded) {
    const filteredData = dataLoaded.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <main className="ml-4">
        <Search
          onChange={searchOnChange}
          placeholder="Search for movies or TV Series"
        />
        <h1 className="mt-9 text-xl font-light tracking-tight md:text-[32px]">
          Trending
        </h1>
        <section>
          <div className=" group  relative mt-4 flex items-center">
            <GoChevronLeft
              onClick={slideLeft}
              className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white text-black opacity-50 hover:opacity-100  group-hover:block"
              size={30}
            />
            <div
              ref={slideRef}
              className="touch-pan-x overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
            >
              {filteredData
                .filter((item) => item.isTrending === true)
                .map((item, id) => (
                  <Trending key={id} item={item} />
                ))}
            </div>
            <GoChevronRight
              onClick={slideRight}
              className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white text-black opacity-50 hover:opacity-100 group-hover:block"
              size={30}
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-[32px]">
              {search ? "Found results:" : "Recommennded for You"}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {filteredData
                .filter((item) => item.isTrending === false)
                .map((item, id) => (
                  <Recommended key={id} item={item} />
                ))}
            </div>
            {filteredData.length === 0 ? (
              <h3 className="text-center text-sm">
                Unfortunetly we couldn't find anything with your searched.
                Please try something else.
              </h3>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
    );
  }
};

export default HomePage;
