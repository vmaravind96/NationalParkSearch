
import Navbar from 'react-bootstrap/Navbar';


function Footer() {

    return (
        <div className='Footer'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Text className='fw-bold'>
                    &copy; {(new Date()).getFullYear()} - Enjoy The Outdoors
                </Navbar.Text>
            </Navbar>
        </div>
    )

}

export default Footer;