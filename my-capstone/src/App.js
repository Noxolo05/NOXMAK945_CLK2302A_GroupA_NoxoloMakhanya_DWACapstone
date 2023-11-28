import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import carouselData from './carouseldata';
import PodcastGrid from './PodcastGrid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel data={carouselData}/>
      <PodcastGrid/>
    </div>
  );
}

export default App;