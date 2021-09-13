import React,{ useEffect,useState } from 'react';

const Film = (props) => {

   useEffect(() => {
    fetch(props.url).then((res) => {
        return res.json()
    } ).then((data) => {
        console.log(data)
        setFilmData(data)
    } )
   },[])
   const [counter, setCounter] = useState(10)
   const [ filmData, setFilmData] = useState({})

   

   console.log("repainting")
    return (
        <div>
            <p>
                {filmData.title}
            </p>
            <p>{counter}</p>
            <button onClick={(event) => {
                console.log(event)
                setCounter(counter + 1)
            }}>Increment</button>
        </div>
    );
}

export default Film;
