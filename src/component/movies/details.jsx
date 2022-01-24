import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axiosInstance from "../axiosConfig/axiosCofig";
const Details = () => {
    const params = useParams();
    const [Details, setDetails] = useState({});

    useEffect(() => {
        // console.log(params.id)
        axiosInstance
        .get(`/${params.id}`, {
            params: {
                api_key: `57e592f7ba52434fb6f7921559e390b6`,
            }
            
        })
            .then((res) => { setDetails(res.data) })
            .catch((err) => { console.log(err) });
    })


    return (
        <div className="card col-3" style={{ width: "18rem;" }} >
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${Details.poster_path}`} />
            <div className="card-body">

                <h5 className="card-title">{Details.original_title}</h5>
                <small>{Details.overview}</small>
                <h5> Ratign: {Details.vote_average}</h5>
            </div>

        </div>
    )
}
export default Details;