import Search from "../../components/Search";
import Recommended from "../../components/Recommended";
import { useState } from "react";
import { useDataContext } from "../../context/DataContext";

const SeriesPage = () => {
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
        <Search onChange={searchOnChange} placeholder="Search for TV series" />
        <section className="mt-4">
          <div>
            <h2 className="text-xl md:text-[32px]">
              {search ? "Found results:" : "TV Series"}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2 ">
              {filteredData
                .filter((item) => item.category.toLowerCase() === "tv series")
                .map((item, id) => (
                  <Recommended key={id} item={item} />
                ))}
            </div>
          </div>
          {filteredData.length === 0 ? (
            <h3 className="text-center text-sm">
              Unfortunetly we couldn't find anything with your searched. Please
              try something else.
            </h3>
          ) : (
            ""
          )}
        </section>
      </main>
    );
  }
};

export default SeriesPage;
