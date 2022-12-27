import axios from "axios"
import { useState, useEffect } from 'react';

function RandomChar() {

    const FilmItemRow = (props) => {
        return (
          <li>
            <a href={props.url}>{props.url}</a>
          </li>
        )
      }

    const [loadedCharacter, setLoadedCharacter] = useState(false);
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [species, setSpecies] = useState(null);
    const [films, setFilms] = useState([]);


    let getNewCharacter = async() => {
      const randomNumber = Math.round( Math.random() * 82)
          const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
      try {
          const response = await axios.get(url)
          const data =response.data
          console.log(data)
          setName(data.name);
          setImage(data.image);
          setSpecies(data.species);
          setFilms(data.films);
          setLoadedCharacter(true);
      } catch (error) {
          console.log(error)
      }
  }

    useEffect(() => {
      getNewCharacter();
      }, []);
    
    //   const movies = films.map((url, i) => {
    //     return <FilmItemRow key={i} url={url} />;
    //   });
    


    return (
        <>
        <div>
      {
        loadedCharacter &&
        <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm w-50 h-50">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src={image} alt={name} className='w-50 h-50' />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {species}
            </p>
            <button  onClick={getNewCharacter}  type="button"  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Randomize Character</button>
          </div>
        </div>
      </div>
      }
    </div>
        
        </>
    )
}

export default RandomChar