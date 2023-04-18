import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>1 of 3</Col>
                    <Col lg={6}>2 of 3</Col>
                    <Col lg={3}>3 of 3</Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;