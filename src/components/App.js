

import React, {useEffect, useState} from 'react';


function App(){
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then((data) => setImage(data.message)
        )
    }, [])

    if (!image) {
      return <h2>Loading...</h2>
    }
    return(
        <div>
            <p>Random Dog</p>
            <img src={image} alt="A Random Dog" />
        </div>
    )

}

export default App