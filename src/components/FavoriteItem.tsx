import React from "react";

const FavoriteItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="w-[120px] h-[120px] p-2 flex-grow-0 flex-shrink-0 rounded-md bg-blue-950 text-white flex items-end">
      {name}
    </div>
  );
};

export default FavoriteItem;
