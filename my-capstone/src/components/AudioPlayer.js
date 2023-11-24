// AudioPlayer.js

import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ episode, onProgressChange, onSaveProgress }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Fetch episode data based on the episode prop

    // Simulate the duration of the episode (in seconds)
    setDuration(episode.duration);
  }, [episode]);

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
    onProgressChange(e.target.currentTime, duration);
  };

  const handleSaveProgress = () => {
    onSaveProgress(episode.id, currentTime);
  };

  return (
    <div>
      <audio controls onTimeUpdate={handleTimeUpdate} onEnded={handleSaveProgress}>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>
        Progress: {formatTime(currentTime)} / {formatTime(duration)}
      </p>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default AudioPlayer;
