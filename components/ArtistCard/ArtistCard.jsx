import styles from './ArtistCard.module.css';

function ArtistCard({ artist }) {
  return (
    <div className={styles.artistCard}>
      <img src={artist.photo_url} alt={artist.name} className={styles.artistPhoto} />
      <div className={styles.artistInfo}>
        <h2>{artist.name}</h2>
        <p>Country: {artist.country}</p>
        <p>Years active: {artist.years_active}</p>
      </div>
    </div>
  );
}

export default ArtistCard;