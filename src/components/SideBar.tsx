import { useContext } from "react";
import { Button } from "../components/Button";
import "../styles/sidebar.scss";
import { MoviesContext } from "../moviesContext";

export function SideBar() {

  const { selectedGenreId, setSelectedGenreId, genres } = useContext(MoviesContext)

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
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
  );
}
