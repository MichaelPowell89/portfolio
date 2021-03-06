import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import gameDesign from "../public/images/controller.png"
// import webDesign from "../public/images/website.png"
import about from "../public/images/man.png"
import contact from "../public/images/email.png"
import linkedIn from "../public/images/linkedin.png"
import CV from "../public/CV_GameDesign.pdf"

const NavbarTest = () => {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={(open ? "" : "backgroundGradient")}>
		<div className='menuOverlay' style={{display : open ? 'none' : 'inherit'}}/>
			<Container>
				<Navbar.Brand href="/portfolio/">Michael Powell</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick} />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
					</Nav>
					<Nav>
						<Link to="/portfolio/gamedesign"><img className="navbarLogo" src={gameDesign} alt=""/></Link>
						{/* <Nav.Link href="/portfolio_github/webdesign"><img className="navbarLogo" src={webDesign} alt=""/></Nav.Link> */}
						<Link to="/portfolio/about"><img className="navbarLogo" src={about} alt=""/></Link>
						<Link to="/portfolio/contact"><img className="navbarLogo" src={contact} alt=""/></Link>
						<Nav.Link href={CV} download><h1 className="CV">CV</h1></Nav.Link>
						<Link to="https://www.linkedin.com/in/michael-powell-38870333"><img className="navbarLogo" src={linkedIn} alt=""/></Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTest;
