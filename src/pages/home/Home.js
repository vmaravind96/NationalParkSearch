import { Container } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import HomeCards from "../../components/home_cards/HomeCards";

function Home (props){

    return (
        <div className="Home bg-light">
            <Hero/>
            <Container className="py-4">
                <HomeCards/>
            </Container>
        </div>
    )

}

export default Home;