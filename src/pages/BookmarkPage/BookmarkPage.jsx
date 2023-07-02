import data from "../../data/data.json";
import Search from "../../components/Search";
import Recommended from "../../components/Recommended";
import { useState } from "react";

const BookmarkPage = () => {
  const [search, setSearch] = useState("");

  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
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
          <h2>{search ? "Found results:" : "Bookmarked Movies"}</h2>
          <div className="mt-6 flex flex-wrap gap-2 md:justify-center">
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
          <h2>{search ? "" : "Bookmarked TV Series"}</h2>
          <div className="mt-6 flex flex-wrap gap-2 md:justify-center">
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
};

export default BookmarkPage;
