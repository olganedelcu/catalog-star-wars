import React, { useState, useEffect } from 'react'

export default function LoadMore() {
    const [listCharacters, setListCharacters] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");

    useEffect(function () {
        fetch("https://swapi.dev/api/people/?format=json")
            .then(function (response) {
                return response.json()
            }).then((data) => {
                setListCharacters(data.results)
                setNextUrl(data.next) // url to page 2
                setPrevUrl(data.previous) // url to page 2

            })
    }, [])

    // will change the state of app
    function loadMore() {
        // fetch the next url
        fetch(nextUrl)
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                // update the state
                setListCharacters([
                    ...listCharacters, // old state
                    ...data.results
                ])
                // set the next to the next page
                setNextUrl(data.next)
                setPrevUrl(data.previous)
            })
    }
    return (
        <div className="button.class">
            <button  onClick={loadMore} >Load More...</button>
        </div>

    )
}


