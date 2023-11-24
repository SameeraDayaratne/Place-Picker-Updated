import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import Error from "./Error.jsx";
import {sortPlacesByDistance} from '../loc.js'

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error , setError] = useState();

  useEffect(() => {

    async function fetchPlaces(){

      setIsFetching(true);
      try {
        
        let response = await fetch("http://localhost:3000/places");
        let resData = await response.json();

        if(!response.ok)
        {
          throw new Error('An error occured');
        }

        navigator.geolocation.getCurrentPosition((position)=>{

          const sortedPlaces = sortPlacesByDistance(resData.places,position.coords.latitude,position.coords.longitude);

          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });

        

      } catch (error) {
        setError({
          message : (error.message || 'Failiure occured and could not find places')
        });
      }
     
      setIsFetching(false);
    
    }

    fetchPlaces();
    
  }, []);

  if(error)
  {
    return <Error title='An Error has Occured' message={error.message} ></Error>
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
