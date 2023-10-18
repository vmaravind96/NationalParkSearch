import { useEffect, useState } from "react";

export const useParks = () => {
    let [nationalParks, setNationalParks] = useState([]);
    let [locations, setLocations] = useState([]);
    let [types, setTypes] = useState([]);

    let getParks = () => {
        //use fetch to make an API call and get the national parks data
        fetch('/data/nationalparks.json')
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {

                //update state with the data from the API causing the page to re-render
                setNationalParks(data.parks);
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }

    let getLocations = () => {
        //use fetch to make an API call and get the national parks location data
        fetch('/data/locations.json')
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {

                //update state with the data from the API causing the page to re-render
                setLocations(data);
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }

    let getTypes = () => {
        //use fetch to make an API call and get the national parks type data
        fetch('/data/parktypes.json')
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {

                //update state with the data from the API causing the page to re-render
                setTypes(data);
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        getParks()
        getLocations()
        getTypes()
    }, [])

    return [nationalParks, locations, types]
} 