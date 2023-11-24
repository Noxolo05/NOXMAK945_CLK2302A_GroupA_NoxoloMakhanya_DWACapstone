// SeasonSelector.js

import React from 'react';
import { Link } from 'react-router-dom';

const SeasonSelector = ({ showId, seasons }) => {
  return (
    <div>
      <h3>Select Season</h3>
      <ul>
        {seasons.map((season) => (
          <li key={season.number}>
            <Link to={`/shows/${showId}/seasons/${season.number}`}>Season {season.number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonSelector;
