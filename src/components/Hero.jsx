import Nav from 'react-bootstrap/Nav';

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero__header">Yo, I'm John Doe.</h1>
            <p className="hero__text">I'm something of a web developer myself.</p>
            {/* links: about, projects, contact*/}
            <Nav className="justify-content-center" variant="pills" defaultActiveKey="#hero">
                <Nav.Item>
                    <Nav.Link href="#hero">Hero</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#contacts">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Hero;
