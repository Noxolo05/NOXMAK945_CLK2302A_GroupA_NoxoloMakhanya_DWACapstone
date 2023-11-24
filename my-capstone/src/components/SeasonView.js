// SeasonView.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SeasonView = () => {
  const { showId, seasonNumber } = useParams();

  // Fetch episodes for the specific show and season

  return (
    <div>
      <h2>Season {seasonNumber}</h2>
      {/* Display episodes for the specific season */}
      <Link to={`/shows/${showId}`}>Back to Show</Link>
    </div>
  );
};

export default SeasonView;
