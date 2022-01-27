import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/albums.css';

const Albums = ({ artist, artistAlbums }) => (
  <div>
    {artistAlbums.map(({ title, year, imgSrc }, idx) => (
      <Link
        to={`/${artist}/${title}`}
        key={idx + title}
        className="album-link bg-blk"
      >
        <div className="album-link-info">
          <p>{title}</p>
          <p>{year}</p>
        </div>
        <img src={imgSrc} />
      </Link>
    ))}
  </div>
);

export default Albums;
