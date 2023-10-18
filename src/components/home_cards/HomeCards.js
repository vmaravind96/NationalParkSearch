import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

function HomeCards(props) {
    return (
        <div className='HomeCards'>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className='h-100'>
                        <Card.Img variant="top" src="https://media.cntraveler.com/photos/6488ae641b82d36ab296a8be/master/w_2580%2Cc_limit/Badlands-National-Park-michael-TFBum6SWKi8-unsplash.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Visit our National Parks search page to find the park that is just right for you!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-center">
                            <LinkContainer to="/nationalparks">
                                <Button variant="secondary">
                                    National Parks Search
                                </Button>
                            </LinkContainer>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100'>
                        <Card.Img variant="top" src="https://media.cntraveler.com/photos/6488ae99c39a02ba647f7b4b/master/w_2580%2Cc_limit/Great-Smoky-Mountains-National-Park-GettyImages-949528764.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Visit our Mountains Page to explore the details of 48 different mountains.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-center">
                            <LinkContainer to="/mountains">
                                <Button variant="secondary">
                                    Mountains Information
                                </Button>
                            </LinkContainer>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default HomeCards;