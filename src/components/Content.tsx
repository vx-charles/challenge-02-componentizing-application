import { useContext } from 'react';
import { MovieCard } from '../components/MovieCard';
import { MoviesContext } from '../moviesContext';

import '../styles/content.scss';

export function Content() {
  const { selectedGenre, movies } = useContext(MoviesContext)

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
