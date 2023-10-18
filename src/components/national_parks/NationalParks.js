import { useParks } from "../../hooks/useParks";

function NationalParks() {

    const [nationalParks, locations, types] = useParks();

    return (
        <div className="NationalParks bg-light">
            <h1>National Parks Search</h1>

            <hr/>
            Park Types:
            <pre>
                {JSON.stringify(types, null, 2)}
            </pre>
            Park Locations:
            <pre>
                {JSON.stringify(locations, null, 2)}
            </pre>
            Parks;
            <pre>
                {JSON.stringify(nationalParks, null, 2)}
            </pre>
        </div>
    )
}

export default NationalParks;