// Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch shows from the API
    axios.get('https://podcast-api.netlify.app/shows')
      .then(response => setShows(response.data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div>
      <h1>Podcast App</h1>
      {/* Display the list of shows */}
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <a href={`/shows/${show.id}`}>{show.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
