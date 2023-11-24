import Places from "./Places.jsx";
import { useState, useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {

    async function fetchPlaces(){

      let response = await fetch("http://localhost:3000/places");
      let resData = await response.json();
      setAvailablePlaces(resData.places);

    }

    fetchPlaces();
    
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
