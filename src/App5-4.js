import React from "react";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        // 자바스크립트에게 getMovies() 함수는 시간이 필요하고
        const movies = await axios.get(
            // axios.get()의 실행을 기다려 달라고 말해주는거임
            "https://yts-proxy.now.sh/list_movies/json"
        );
        console.log(movies);
    };
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ isLoading: false });
        // }, 6000);
        // axios.get("https://yts-proxy.now.sh/list_movies/json");
        this.getMovies();
    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    }
}

export default App;
