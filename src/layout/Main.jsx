import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>

                    <Col lg={6}>
                        2 of 3
                    </Col>

                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;