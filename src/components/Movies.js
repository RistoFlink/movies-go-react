import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "House",
                release_date: "1977-07-30",
                runtime: 88,
                mpaa_rating: "R",
                description: "Enter later"
            },
            {
                id: 2,
                title: "Highlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpaa_rating: "R",
                description: "Enter later"
            },
        ];

        setMovies(moviesList)
    }, [])
    return (
        <div>
            <h2>Movies</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        < tr key={m.id} >
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Movies;