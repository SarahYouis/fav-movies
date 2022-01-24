// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosConfig/axiosCofig";
import { useDispatch, useSelector } from "react-redux";
import { AddFav, RemoveFav } from "../../store/action/FavouritAction";


export default function Home() {
    const [Movies, setMovies] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.Fav);
    // console.log(selector);
    const myAPI = "57e592f7ba52434fb6f7921559e390b6"


    useEffect(() => {
        axiosInstance
            .get(`/popular?api_key=${myAPI}&page=${countPage}`)
            .then((movie) => setMovies(movie.data.results))
            // .then((movie)=> console.log(movie.data))
            // .then((movie) => console.log(movie.data.results))
            .catch((err) => console.log(err));
        // console.log(Movies.data);

    }, [countPage]);

    const pervious = (() => {
        let count = (countPage == 1) ? countPage:--countPage;
        setCountPage(count);
    })

    const next = (() => {
        let count = ++countPage;
        setCountPage(count);
        console.log(countPage);
    })

  
    let EditFav = (e, movie) => {
        if (e.target.className == 'bi bi-heart') {
            dispatch(AddFav(movie));
            e.target.className = 'bi bi-heart-fill text-danger';
        } else {
            dispatch(RemoveFav(movie));
            e.target.className = 'bi bi-heart';
        }
    }
    let checkFav = (id) => {
        let exist = selector.find(movie => movie.id == id)
        return exist;
    }


    return (
        <>
            <div className="row p-3">
                {Movies.map((movies) => {
                    // console.log(movies);
                    return (
                        <div className="card col-3" style={{ width: "18rem;" }} key={movies.id}>
                            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
                            <div className="card-body">
                                <h5 className="card-title">{movies.title}</h5>
                                <p className="card-text">
                                    {movies.vote_count}
                                </p>
                                {checkFav(movies.id) == undefined ? (
                                    <h2>
                                        <i onClick={(e) => EditFav(e, movies)}
                                            className="bi bi-heart"></i>
                                    </h2>) : (
                                    <h2>
                                        <i onClick={(e) => EditFav(e, movies)}
                                            className="bi bi-heart-fill text-danger"></i>
                                    </h2>
                                )}
                                <Link to={`/details/${movies.id}`} className="btn btn-primary"> show more</Link>
                            </div>

                        </div>
                    )
                })


                }
            </div>
            <div className="row">
                <button onClick={() => pervious()} className="col-2 btn btn-primary m-4 ms">
                    <Link style={{ color: "white" }}>pervious</Link>
                </button>

                <button onClick={() => next()} className="col-2 btn btn-primary m-4 me">
                    <Link style={{ color: "white" }}>next</Link>
                </button>
            </div>



        </>

    )
}
