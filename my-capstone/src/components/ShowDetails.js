// ShowDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/shows/${showId}`);
        const data = await response.json();
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  if (loading) {
    return <p>Loading show details...</p>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <p>Genres: {show.genres.join(', ')}</p>
      <p>Last Updated: {show.lastUpdated}</p>

      <h3>Seasons</h3>
      <ul>
        {show.seasons.map((season) => (
          <li key={season.number}>
            <img src={season.image} alt={`Season ${season.number}`} />
            <p>Season {season.number}</p>
            <p>Episode Count: {season.episodeCount}</p>
            {/* Add more season details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDetails;
