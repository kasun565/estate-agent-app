import React from 'react';

const FavouriteButton = ({ onClick }) => {
  return (
    <button className="fav-btn" onClick={onClick} title="Add to favourites">
      ❤️
    </button>
  );
};

export default FavouriteButton;
