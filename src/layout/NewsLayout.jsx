import React from 'react';
import Header from '../pages/Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Footer from '../pages/Shared/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>

                    <Col lg={6}>
                        <Outlet></Outlet>
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

export default NewsLayout;