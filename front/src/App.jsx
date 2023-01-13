import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { Header } from './components/Header';

import './App.scss';

const ROUTES = [{
  path: `/`,
  name: 'Dashboard',
  icon: ''
}, {
  path: `/tasks`,
  name: 'Tasks',
  icon: ''
}]

export function App() {
  return (
    <Container fluid className="wrapper">
      <Row>
        <Header routes={ROUTES} />
      </Row>
        
      <Row>
        <Col as="main">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
