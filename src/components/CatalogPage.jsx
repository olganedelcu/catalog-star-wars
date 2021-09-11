import React from 'react';
import { Link } from 'react-router-dom';


export default function CatalogPage({ data }) {
    return (
        <>
            <div className="title">
                <h1>Star Wars Catalog</h1>
            </div>

            <div className="catalog" >
                {data.map((people, i) => {
                    const id = people.url.split("/")[5];
                    return (
                        <>
                        <div className="card" key={i}>
                                <Link to={`/character/${id}`} className="title-link" data-cy={`link-character-card-${people.id}`}><h2>{people.name}</h2>
                                <div>
                                    <p> Heigth: {people.height} </p>
                                    <p>Birth year: {people.birth_year}</p>
                                    <p>{people.films && people.films.length} films</p>
                                </div>
                                </Link>
                            </div>
                      
                        </>
                    )
                }
                )}
            </div>

        </>

    );
}