// Packages
import { useEffect, useState } from "react";

// Parts
import { api } from '../services/api';
import { Button } from './Button';

// Types
import { GenreResponseProps, MovieProps } from '../types';

interface IProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setMovies: (data: MovieProps[]) => void;
  setSelectedGenreId: (data: number) => void;
  setSelectedGenre: (data: GenreResponseProps) => void;
}

export function SideBar({genres, selectedGenreId,  setMovies, setSelectedGenreId, setSelectedGenre} : IProps){

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  function handleClickButton(id: number) {
    console.log(id)
    setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}
