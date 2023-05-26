import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const ReadMore = ({movies}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = movies.find((el) => el.id === Number(id));

  const onClick = (e) => navigate("/");

  return (
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>

      <p className="card-text">{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailerSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <button className="btn btn-primary" onClick={onClick}>
        Go Back
      </button>
    </div>
  );
};

export default ReadMore;