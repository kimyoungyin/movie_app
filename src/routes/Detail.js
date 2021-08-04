import React, { useEffect } from "react";
import "../style.css";

const Detail = ({ location, history }) => {
    const info = location.state;
    useEffect(() => {
        if (location.state === undefined) {
            history.push("/");
        }
    }, []);
    return (
        <div className="detail">
            {info && (
                <div className="detail__content">
                    <img
                        src={info.poster}
                        alt={info.title}
                        title={info.title}
                        className="detail__img"
                    />
                    <div className="detail__data">
                        <h3 className="detail__title">Title : {info.title}</h3>
                        <h5 className="detail__year">Year : {info.year}</h5>
                        <ul className="detail__list">
                            {info.genres.map((genre, index) => (
                                <li key={index}>{genre}</li>
                            ))}
                        </ul>
                        <p className="movie__summary">
                            Summary : {info.summary}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
