import React, { useEffect, useState} from 'react';

function App(){
    const [dogImage, setDogImage] = useState(null)
    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(randomDog => setDogImage(randomDog.message))
    }, [])
    if (!dogImage){
        return(
            <p>
                Loading...
            </p>
        )
    }
    else {
        return (
            <img alt='A Random Dog' src={dogImage}></img>
        )
    }
}

export default App;