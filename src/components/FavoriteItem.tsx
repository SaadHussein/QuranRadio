import React from "react";

const FavoriteItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="shadow-md w-[120px] h-[120px] p-2 flex-grow-0 flex-shrink-0 rounded-md duration-300 bg-blue-950 hover:bg-blue-900 text-white flex items-end">
      {name}
    </div>
  );
};

export default FavoriteItem;
