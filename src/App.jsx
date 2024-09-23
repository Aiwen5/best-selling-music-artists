import { artists } from './best-selling-music-artists';
import ArtistCard from '../components/ArtistCard/ArtistCard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Best-selling Music Artists</h1>
      <div className={styles.artistsList}>
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default App;