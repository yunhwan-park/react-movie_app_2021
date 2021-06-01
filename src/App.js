import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import './App.css'

class App extends React.Component {
  state = {
    isLoading : true,
    movies: [],
  };

  // 자바스크립트에게 async가 붙은 함수는 시간이 필요함을 알려준다.
  // 이 함수는 비동기함수라고 알려줌
  getMovies = async () => {

    // await가 붙은 함수는 axios.get() 함수의 실행을 기달려 달라고 하는 기호임
    const {
      data : {
        data : { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');  // sort_by=rating 때문에 내림차순으로 정렬합니다.

    this.setState( {movies, isLoading: false} );
  }

  componentDidMount() {

    // 영화 데이터 로딩!
    this.getMovies();

  }

  render() {
    const { isLoading, movies } = this.state;   // 구조분해 연산자할당으로 this.state에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도 됩니다.
    
    return <section className="container">
      {
      isLoading ? 
      <div className="loader">
        <span className="loader__text">Loading...</span>  
      </div>
      : 
      (
        <div className="movies">
          {
            movies.map((movie) => {
              console.log(movie);
              return <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />;
            })
          }
        </div>
      )
    }
    </section>;  // 3항 연산자 활용함  
  }
  
}

export default App;
