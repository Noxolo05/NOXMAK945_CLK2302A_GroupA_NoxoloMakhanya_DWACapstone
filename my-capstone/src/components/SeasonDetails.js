// SeasonDetails.js
import React from 'react';

const SeasonDetails = ({ season }) => {
  return (
    <div>
      <h3>Episodes - Season {season.number}</h3>
      <ul>
        {season.episodes.map((episode) => (
          <li key={episode.id}>
            {episode.title} - <button>Listen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonDetails;
const sortShows = (shows) => {
    return shows.sort((a, b) => {
      const titleA = a.title || ''; // Handle undefined values
      const titleB = b.title || ''; // Handle undefined values
      return titleA.localeCompare(titleB);
    });
  };