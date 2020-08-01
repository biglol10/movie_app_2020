import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App7.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        // 자바스크립트에게 getMovies() 함수는 시간이 필요하고
        // const movies = await axios.get(
        //     // axios.get()의 실행을 기다려 달라고 말해주는거임
        //     "https://yts-proxy.now.sh/list_movies/json"
        // );

        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies/json?sort_by=rating"
        );

        this.setState({ movies: movies, isLoading: false }); // this.setState({ movies })  키와 대입할 변수의 이름이 같으니 movies로 축약 가능
    };
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ isLoading: false });
        // }, 6000);
        // axios.get("https://yts-proxy.now.sh/list_movies/json");
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
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
            </section>
        );
    }
}

export default App;
