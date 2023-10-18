import { useEffect, useState } from "react";

export const useMountains = () => {
    let [mountains, setMountains] = useState([]);

    let getMountains = () => {
        //use fetch to make an API call and get the Mountain data
        fetch('/data/mountains.json')
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {

                //update state with the data from the API causing the page to re-render
                setMountains(data.mountains);
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        getMountains()
    }, [])

    return mountains;
} 