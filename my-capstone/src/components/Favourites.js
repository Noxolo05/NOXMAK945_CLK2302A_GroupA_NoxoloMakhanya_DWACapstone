// Favorites.js

import React from 'react';
import { useAuth } from '../FavouritesContext';

const Favorites = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Please log in to view your favorites.</p>;
  }

  // Fetch and display user's favorite episodes

  return (
    <div>
      <h2>Your Favorites</h2>
      {/* Display favorite episodes here */}
    </div>
  );
};

export default Favorites;



  