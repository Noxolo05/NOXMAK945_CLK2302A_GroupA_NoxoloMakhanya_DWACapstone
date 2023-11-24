// EpisodeList.js

import React from 'react';

const EpisodeList = ({ episodes, onEpisodeSelect, onFavoriteToggle }) => {
  const formatDate = (dateString) => {
    // Implement date formatting logic (e.g., using a library like date-fns)
  };

  const isFavorite = (episodeId) => {
    // Implement logic to check if the episode is in the user's favorites
  };

  return (
    <div>
      <h2>Episodes</h2>
      {episodes.map((episode) => (
        <div key={episode.id}>
          <h3>{episode.title}</h3>
          <p>Season {episode.seasonNumber}, Episode {episode.episodeNumber}</p>
          <p>Release Date: {formatDate(episode.releaseDate)}</p>
          <button onClick={() => onEpisodeSelect(episode.id)}>View Details</button>
          <button onClick={() => onFavoriteToggle(episode.id)}>
            {isFavorite(episode.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;

