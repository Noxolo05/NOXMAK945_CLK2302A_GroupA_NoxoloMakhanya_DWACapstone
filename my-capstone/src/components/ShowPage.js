// ShowPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeList from './EpisodeLists';

const ShowPage = ({ fetchShowDetails, fetchSeasonEpisodes, addToFavorites, removeFromFavorites, favorites }) => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    // Fetch show details when the component mounts
    const fetchShow = async () => {
      try {
        const showDetails = await fetchShowDetails(showId);
        setShow(showDetails);
        setSeasons(showDetails.seasons);
        // Set the default selected season to the first season
        if (showDetails.seasons.length > 0) {
          setSelectedSeason(showDetails.seasons[0].id);
        }
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShow();
  }, [fetchShowDetails, showId]);

  const handleSeasonSelect = async (seasonId) => {
    // Fetch episodes for the selected season
    try {
      const seasonEpisodes = await fetchSeasonEpisodes(seasonId);
      setSelectedSeason(seasonId);
      // You can now use seasonEpisodes in the component state or pass it to child components
    } catch (error) {
      console.error('Error fetching season episodes:', error);
    }
  };

  const handleFavoriteToggle = (episodeId) => {
    const isFavorite = favorites.includes(episodeId);
    if (isFavorite) {
      removeFromFavorites(episodeId);
    } else {
      addToFavorites(episodeId);
    }
  };

  return (
    <div>
      {show && (
        <div>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
          <h2>Seasons</h2>
          <ul>
            {seasons.map((season) => (
              <li key={season.id}>
                <button onClick={() => handleSeasonSelect(season.id)}>
                  Season {season.number} ({season.episodeCount} episodes)
                </button>
              </li>
            ))}
          </ul>
          {selectedSeason && (
            <div>
              <h2>Episodes</h2>
              {/* Render EpisodeList component with the episodes of the selected season */}
              <EpisodeList
                episodes={''}
                onEpisodeSelect={(episodeId) => console.log('View details for episode', episodeId)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowPage;
