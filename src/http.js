export async function storeUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places',{
        method:'PUT',
        body:JSON.stringify({
            places
        }),
        headers:{
            'Content-Type' : 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error('An Error Occured');  
    }

    return resData.message;
}

export async function fetchSelectedPlaces(){

    const response = await fetch("http://localhost:3000/user-places");

    const resData = await response.json();

    if(!response.ok){
        throw new Error('Error Fetching picked places');
    }


    
    return resData.places;
}