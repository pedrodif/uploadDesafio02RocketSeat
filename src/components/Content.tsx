//Components
import { MovieCard } from '../components/MovieCard';
import Header from './Header';

// Types
import { GenreResponseProps, MovieProps } from '../types';

interface IProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content({movies, selectedGenre} : IProps) {
  return(
    <div className="container">
    <Header title={selectedGenre.title} />
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}
