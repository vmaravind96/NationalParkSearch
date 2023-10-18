import { useMountains } from "../../hooks/useMountains";

function Mountains() {

    const mountains = useMountains();
    
    return (
        <div className="Mountains bg-light">
            <h1>Mountains Information</h1>
            <hr/>
            Mountains:
            <pre>
                {JSON.stringify(mountains, null, 2)}
            </pre>
        </div>
    )
}

export default Mountains;