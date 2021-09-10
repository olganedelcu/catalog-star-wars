import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const apiUrl = 'https://swapi.dev/api/people';
export default function CharacterPage() {
    const { id } = useParams();
    const [characterData, setCharacterData] = useState({});

    useEffect(() => {
        async function fetchSingleCharacter() {
            let res = await fetch(`${apiUrl}/${id}/?format=json`);
            let data = await res.json();
            setCharacterData(data);
        }
        fetchSingleCharacter()
    })
    return <>
        <div className="characterPage">
            <h2> {characterData.name}</h2>
            <div className="charCaracteristics">
                <div className="charContainer"> <p>Height: {characterData.height}</p> </div>
                <div className="charContainer"> <p>Eye color: {characterData.eye_color}</p> </div>
                <div className="charContainer"> <p>Birth Date: {characterData.birth_year}</p> </div>
                <div className="charContainer"> <p>Hair color: {characterData.hair_color}</p> </div>
            </div>
            <div className="charCaracteristics">
                <p> {characterData.films && characterData.films.length} films</p>
            </div>
                <div className="films">
                    <div>
                        {characterData.films && characterData.films.map(film => <p>{film}</p>)}
                    </div>
                </div>
            </div>
            <div className="charCaracteristics">
                <Link to="/" className="goBackHome">Go Back Home...</Link>
            </div>
    </>
}
