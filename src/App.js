import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);

    const getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        setMovieList(movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className="App">
            {loading ? (
                <div className="loader">
                    <div className="loader-text">Loading..</div>
                </div>
            ) : (
                <div className="movies">
                    {movieList.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
