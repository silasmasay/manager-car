import { Link } from "react-router-dom";
import { Nav, Navbar, Stack } from "react-bootstrap";

import logo from '../../assets/logo.svg';

import styles from './Header.module.scss';

export function Header({ routes }) {
	return (
		<Navbar 
			as="header"
			expand="lg"
			className={styles.header}
		>
			<Stack className={styles.navToggle} direction="horizontal" gap={2}>
				<Link to={`/`}>
						<img alt="logo" src={logo} />
				</Link>
				<Navbar.Toggle aria-controls="navbar" />
			</Stack>

			<Navbar.Collapse id="navbar">
				<Nav className={styles.content} navbarScroll>
					<Stack direction="horizontal" gap={2}>
						<Link to={`/`}>
								<img alt="logo" src={logo} />
						</Link>
						<Link to={`/`}>
							<Navbar.Brand>
								Manager CAR
							</Navbar.Brand>
						</Link>
					</Stack>

					<Nav 
						fill
						defaultActiveKey="0"
					>
						{routes.map((route, key) => (
							<Nav.Item
								key={key}
								style={{ textAlign: 'left' }} 
							>
								<Nav.Link 
									as={Link}
									eventKey={key}
									to={route.path}
								>
									{route.name}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}