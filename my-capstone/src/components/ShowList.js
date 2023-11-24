// ShowList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ShowList = ({ onShowSelect }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFavoriteToggle = (episodeId) => {
    // //
  }

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/shows');
        const data = await response.json();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching show data:', error);
      }
    };

    fetchShows();
  }, []);

  if (loading) {
    return <p>Loading shows...</p>;
  }

  return (
    <div>
      <h2>All Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/shows/${show.id}`}>
              <img src={show.imageUrl} alt={show.title} />
              <p>{show.title}</p>
              <p>Seasons: {show.seasonCount}</p>
              <p>Last Updated: {formateDate(show.lastUpdated)}</p>
              <p>Genres: {show.genres.join(', ')}</p>
              <button onClick={() => onShowSelect(show.id)}>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const formateDate = (dateString) => {
  // //
};


export default ShowList;
