import React from 'react';
import ProTypes from 'prop-types';
import './Movie.css'
import { isElement } from 'react-dom/test-utils';

function Movie({title, year, summary, poster, genres}) {
    return (

        <div className="movie__data">
            <img src={poster} alt="{title}" title={title} />
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genre">
                {
                    genres.map((genre) => {
                        return <il className="movie_genre">{genre}</il>
                    })
                }
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    );
}

Movie.prototype = {
    year : ProTypes.number.isRequired,          // year도 숫자
    title : ProTypes.string.isRequired,         // 문자열
    summary : ProTypes.string.isRequired,       // 문자열
    poster : ProTypes.string.isRequired,        // 이미지 주소 (문자열)
    genres : ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie;