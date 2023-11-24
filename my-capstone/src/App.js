// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowPage from './components/ShowPage';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import SeasonSelector from './components/SeasonSelector';
import SeasonView from './components/SeasonView';
import SortingFilteringOptions from './components/SortingFilteringOptions';

import AudioPlayer from './components/AudioPlayer';

const App = () => {
  const [sortedShows, setSortedShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [listeningHistory, setListeningHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      // Fetch and set listening history from storage or API
      const fetchListeningHistory = async () => {
        try {
          const response = await fetch(/* Your API endpoint for listening history */);
          const data = await response.json();
          setListeningHistory(data);
        } catch (error) {
          console.error("Error fetching listening history:", error);
        }
      };
    
      // Fetch and set favorites from storage or API
      const fetchFavorites = async () => {
        try {
          const response = await fetch(/* Your API endpoint for favorites */);
          const data = await response.json();
          setFavorites(data);
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      };
    
      fetchListeningHistory();
      fetchFavorites();
    }, []);

   

   // Fetch and set favorites from storage or API
   const storedFavorites = /* Fetch favorites from your data source */
   setFavorites(storedFavorites);

 const addToListeningHistory = (episodeId, progress) => {
   // Add or update the episode in the listening history
   // Update the component state and persist the data
 };

 const addToFavorites = async (episodeId) => {
   // Add the episode to favorites in the component state
   setFavorites([...favorites, episodeId]);

   
 };


 const removeFromFavorites = async (episodeId) => {
   // Remove the episode from favorites in the component state
   const updatedFavorites = favorites.filter((id) => id !== episodeId);
   setFavorites(updatedFavorites);

   

  const handleSort = (option) => {
    // Implement sorting logic based on the selected option
  };

  const handleFilter = (searchTerm) => {
    // Implement filtering logic based on the search term
  };

return (
  <Router>
    <div>
    <SortingFilteringOptions handleSort={handleSort} handleFilter={handleFilter} />
      <Routes>
        <Route path="/" exact>
        </Route>
        <Route path="/shows" exact>
        <ShowDetails />
            <SeasonSelector />
            </Route>
            <Routes>
              <Route path="/shows/:showId/seasons/:seasonNumber">
                <SeasonView />
          <ShowList shows={filteredShows.length > 0 ? filteredShows : sortedShows}/>
        </Route>
        <Route path="/shows/:showId" exact>
          <ShowPage
            fetchShowDetails={''}
            fetchSeasonEpisodes={''}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            favorites={favorites}
          />
        </Route>
        <Route path="/favorites" exact>
          
        </Route>
      </Routes>
      {/* AudioPlayer is always visible at the bottom */}
      <AudioPlayer
        episode={''}
        onProgressChange={(currentTime, duration) =>
          addToListeningHistory(/* pass episodeId */ currentTime)
        }
        onSaveProgress={(episodeId, currentTime) =>
          addToListeningHistory(episodeId, currentTime)
        }
      />
      </Routes>
    </div>
  </Router>
);

};
}

export default App;
