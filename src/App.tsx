// Packages
import { useEffect, useState } from 'react';

// Parts
import { api } from './services/api';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

// Styles
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

// Types
import { GenreResponseProps, MovieProps } from './types';


export function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);


  console.log(selectedGenre)

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} setMovies={setMovies} selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} setSelectedGenre={setSelectedGenre}/>
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  )
}