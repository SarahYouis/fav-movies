import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFav } from '../../store/action/FavouritAction'

export default function Favourite() {
    const mySelector = useSelector(state => state.Fav);
    const dispatch = useDispatch();
    let removeMov = (e, movie) => {
        dispatch(RemoveFav(movie));
    }
    return (
        <>
            <div className="row p-3">
                {mySelector.length > 0 ?
                    mySelector.map((movie) => {
                        // console.log(movies);
                        return (
                            <div className="card col-3" style={{ width: "18rem;" }} key={movie.id}>
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{ height: '20rem'}} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">
                                        {movie.vote_count}
                                    </p>
                                    <h2>
                                        <i onClick={(e) => removeMov(e, movie)}
                                            className="bi bi-heart-fill text-danger"></i>
                                    </h2>
                                    <Link to={`/details/${movie.id}`} className="btn btn-primary"> show more</Link>
                                </div>

                            </div>
                        )
                    }) : <h1 className='mx-auto my-5 text-dark'>
                        plz select your movies movies
                    </h1>}



            </div>
        </>
    )
}