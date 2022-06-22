import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <CartWidget />
                    <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="#todo">Menú</Nav.Link>
                        <Nav.Link href="#selvatico"> Selva</Nav.Link>
                        <Nav.Link href="#patronal"> Patronal</Nav.Link>
                        <Nav.Link href="#criollo"> Criollo</Nav.Link>
                        <Nav.Link href="#mariscos"> Mariscos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>


    )
}

export default NavBar