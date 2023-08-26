import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FavoriteItem from "./FavoriteItem";

const FAVORITES: { name: string }[] = [
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
  { name: "Saad" },
];

const Favorite: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current!.scrollLeft -= 140;
    } else {
      current!.scrollLeft += 140;
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[30px] font-bold">Favorite</h1>
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-3 bg-gray-300 rounded-xl"
            onClick={() => scroll("left")}
          >
            <FaArrowLeft color="black" />
          </button>
          <button
            className="p-3 bg-gray-300 rounded-xl"
            onClick={() => scroll("right")}
          >
            <FaArrowRight color="black" />
          </button>
        </div>
      </div>
      <div
        className="flex gap-4 w-full overflow-x-hidden mt-2 duration-300"
        ref={scrollRef}
      >
        {FAVORITES.map((favorite) => (
          <FavoriteItem name={favorite.name} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
