import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";

const Recommended = ({ item }) => {
  return (
    <div>
      <img
        src={item.thumbnail.regular.small}
        className="h-[110px] w-[164px] rounded-lg md:hidden"
      />
      <img
        src={item.thumbnail.regular.medium}
        className="hidden h-[140px] w-[220px] rounded-lg md:block lg:hidden"
      />
      <img
        src={item.thumbnail.regular.large}
        className="hidden h-[174px] w-[280px] rounded-lg lg:block"
      />
      <div className="mt-2 flex  items-center gap-2 text-xs font-light opacity-75">
        <p>{item.year}</p>
        <div className="h-[2px] w-[2px] rounded-full bg-white"></div>
        <div className="flex items-center gap-1">
          <MovieIcon />
          <p>{item.category}</p>
        </div>
        <div className="h-[2px] w-[2px] rounded-full bg-white"></div>
        <p>{item.rating}</p>
      </div>
      <h3 className="mt-1 text-sm">{item.title}</h3>
    </div>
  );
};

export default Recommended;
