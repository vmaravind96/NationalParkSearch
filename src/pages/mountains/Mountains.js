import { useMountains } from "../../hooks/useMountains";
import { useState } from "react";
import { Container, Dropdown, Card, ListGroup } from "react-bootstrap";

function Mountains() {
  const SELECT_MOUNTAIN_STR = "Select mountain";

  const mountains = useMountains();
  const [selectedMountain, setSelectedMountain] = useState(SELECT_MOUNTAIN_STR);
  const [mountainObj, setMountainObj] = useState(null);
  const containerStyle = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  };

  const handleMtnDropdown = (eventKey) => {
    setSelectedMountain(eventKey);

    const filtered = mountains.filter(
      (mtn) => mtn.name.toLowerCase() === eventKey.toLowerCase()
    );

    if (filtered.length > 0) {
      const curMountain = filtered[0];
      getSunsetForMountain(curMountain.coords.lat, curMountain.coords.lng).then(
        (sunsetData) => {
          curMountain.sunrise = sunsetData.results.sunrise;
          curMountain.sunset = sunsetData.results.sunset;
          setMountainObj(curMountain);
        }
      );
    }
  };

  //function that can "fetch" the sunset/sunrise times
  async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
      `http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
  }

  return (
    <div className="Mountains bg-light">
      <h1>Mountains Information</h1>
      <hr />

      <Container style={containerStyle}>
        <div>
          <strong>Select a mountain:</strong>
        </div>
        <Dropdown onSelect={handleMtnDropdown}>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-location">
            {selectedMountain}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {mountains.map((mtn) => (
              <Dropdown.Item key={mtn.name} eventKey={mtn.name}>
                {mtn.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <br />
      {mountainObj !== null && (
        <Container style={containerStyle}>
          <Card
            className="mx-auto z-3 bg-dark text-light"
            style={{ width: 335 }}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-center card-header">
                {mountainObj.name}
              </Card.Title>
              <Card.Img
                variant="top"
                src={`/mountainImages/${mountainObj.img}`}
              />
              <Card.Text className="text-center">
                <br />
                {mountainObj.desc}
              </Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  <span className="fw-bold">Elevation:</span>{" "}
                  {mountainObj.elevation}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  <span className="fw-bold">Effort:</span> {mountainObj.effort}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  <span className="fw-bold">Lat:</span>{" "}
                  {mountainObj.coords?.lat || "N/A"} <br />
                  <span className="fw-bold">Lng:</span>{" "}
                  {mountainObj.coords?.lng || "N/A"} <br />
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  <span className="fw-bold">Sunrise:</span>{" "}
                  {mountainObj.sunrise} <br />
                  <span className="fw-bold">Sunset:</span> {mountainObj.sunset}{" "}
                  <br />
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <br />
        </Container>
      )}
    </div>
  );
}

export default Mountains;
