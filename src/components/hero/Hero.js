import Carousel from 'react-bootstrap/Carousel';

function Hero(props) {
    return (
        <div className='Hero'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/5e1380ce5a0316000864edde/master/w_2580%2Cc_limit/Bryce-Canyon-National-Park-GettyImages-921951796.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Bryce Canyon National Park, Utah</h5>
                        <p>Bryce Canyon’s layered red and orange rock pillars, known as hoodoos, make it a can’t-miss destination.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/6488ae809b31895c2ec86829/master/w_2580%2Cc_limit/Crater-Lake-National-Park-GettyImages-500755395.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Crater Lake National Park, Oregon</h5>
                        <p>Sitting at 1,943 feet deep, Crater Lake is the deepest lake in the United States</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.cntraveler.com/photos/6488ae5a6702ed16faad7b7c/master/w_2580%2Cc_limit/Acadia-National-Park-ran-ding-QgrQVM3A04A-unsplash.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Acadia National Park, Maine</h5>
                        <p>
                        Known for its photogenic lighthouses, weathered pine trees, and sunrises atop Cadillac Mountain.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hero;