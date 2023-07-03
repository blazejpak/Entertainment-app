import data from "../../data/data.json";
import Search from "../../components/Search";
import Recommended from "../../components/Recommended";
import { useState } from "react";
import { useDataContext } from "../../context/DataContext";

const BookmarkPage = () => {
  const [search, setSearch] = useState("");

  const { dataLoaded } = useDataContext();

  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  if (dataLoaded) {
    const filteredData = dataLoaded.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <main className="ml-4">
        <Search
          onChange={searchOnChange}
          placeholder="Search for bookmarked shows"
        />
        <section className="mt-4">
          <div>
            <h2 className="text-xl md:text-[32px]">
              {search ? "Found results:" : "Bookmarked Movies"}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 ">
              {filteredData
                .filter(
                  (item) =>
                    item.isBookmarked === true &&
                    item.category.toLowerCase() === "movie"
                )
                .map((item, id) => (
                  <Recommended key={id} item={item} />
                ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-[32px]">
              {search ? "" : "Bookmarked TV Series"}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 ">
              {filteredData
                .filter(
                  (item) =>
                    item.isBookmarked === true &&
                    item.category.toLowerCase() === "tv series"
                )
                .map((item, id) => (
                  <Recommended key={id} item={item} />
                ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
};

export default BookmarkPage;
