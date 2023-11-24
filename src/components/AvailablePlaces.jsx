import Places from './Places.jsx';
import { useState } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {

  const [AvailablePlaces ,setAvailablePlaces] = useState();

  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
