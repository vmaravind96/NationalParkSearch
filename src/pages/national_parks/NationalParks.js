import { useState } from "react";
import { useParks } from "../../hooks/useParks";
import { Dropdown, Container, Button, Table } from "react-bootstrap";

function NationalParks() {
  const LOCATION = "Location";
  const PARK_TYPE = "Park Type";
  const SELECT_LOCATION_STR = "Select location";
  const SELECT_PARK_TYPE_STR = "Select park type";

  const [nationalParksCache, locations, types] = useParks();
  const [selectedOption, setSelectedOption] = useState("Select a criteria");
  const [selectedLocation, setSelectedLocation] = useState(SELECT_LOCATION_STR);
  const [selectedParkType, setselectedParkType] =
    useState(SELECT_PARK_TYPE_STR);
  const [displayTable, setDisplayTable] = useState(false);
  const [parksToDisplay, setParksToDisplay] = useState([]);

  const handleSearchBy = (eventKey) => {
    setSelectedOption(eventKey);
    setSelectedLocation(SELECT_LOCATION_STR);
    setselectedParkType(SELECT_PARK_TYPE_STR);
    setDisplayTable(false);
  };

  const handleLocation = (eventKey) => {
    setSelectedLocation(eventKey);
    setDisplayTable(false);
  };

  const handleParkType = (eventKey) => {
    setselectedParkType(eventKey);
    setDisplayTable(false);
  };

  const canDisplaySubmit = () => {
    return (
      (selectedOption === LOCATION &&
        selectedLocation !== SELECT_LOCATION_STR) ||
      (selectedOption === PARK_TYPE &&
        selectedParkType !== SELECT_PARK_TYPE_STR)
    );
  };

  const handleSearch = () => {
    if (selectedOption === LOCATION) {
      handleLocationSearch();
    } else {
      handleParkTypeSearch();
    }
  };

  const handleLocationSearch = () => {
    const parksFiltered = nationalParksCache.filter(
      (park) => park.State === selectedLocation
    );
    setParksToDisplay(parksFiltered);
    setDisplayTable(true);
  };

  const handleParkTypeSearch = () => {
    const parksFiltered = nationalParksCache.filter((park) =>
      park.LocationName.includes(selectedParkType)
    );
    setParksToDisplay(parksFiltered);
    setDisplayTable(true);
  };

  return (
    <div className="NationalParks bg-light">
      <h1>National Parks Search</h1>
      <Container>
        <div>
          <strong>Search by:</strong>
        </div>
        <Dropdown onSelect={handleSearchBy}>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-search">
            {selectedOption}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Location">Location</Dropdown.Item>
            <Dropdown.Item eventKey="Park Type">Park Type</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>

      {selectedOption === LOCATION && (
        <Container>
          <div>
            <strong>Select a location:</strong>
          </div>
          <Dropdown onSelect={handleLocation}>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-location">
              {selectedLocation}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {locations.map((location) => (
                <Dropdown.Item key={location} eventKey={location}>
                  {location}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      )}

      {selectedOption === PARK_TYPE && (
        <Container>
          <div>
            <strong>Select a park type:</strong>
          </div>
          <Dropdown onSelect={handleParkType}>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-park-type">
              {selectedParkType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {types.map((pt) => (
                <Dropdown.Item key={pt} eventKey={pt}>
                  {pt}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      )}
      <br />
      {canDisplaySubmit() && (
        <Container>
          <Button variant="primary" size="md" onClick={handleSearch}>
            Search
          </Button>
        </Container>
      )}
      <br />
      {displayTable && (
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Id#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Location</th>
                <th>Contact</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {parksToDisplay.map((park, idx) => (
                <tr key={idx}>
                  <td>{idx+1}</td>
                  <td>{park.LocationID}</td>
                  <td>{park.LocationName}</td>
                  <td>{park.Address===0 ? "N/A": park.Address}</td>
                  <td> 
                    <span style={{ fontWeight: 'bold' }}>City:</span>{park.City}<br/>
                    <span style={{ fontWeight: 'bold' }}>State:</span>{park.State}<br/>
                    <span style={{ fontWeight: 'bold' }}>Zip:</span>{park.ZipCode}
                  </td>
                  <td> 
                    <span style={{ fontWeight: 'bold' }}>Phone:</span>{park.Phone || "N/A"}<br/>
                    <span style={{ fontWeight: 'bold' }}>Fax:</span>{park.Fax || "N/A"}<br/>
                  </td>
                  <td>{park.Visit || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
}

export default NationalParks;
