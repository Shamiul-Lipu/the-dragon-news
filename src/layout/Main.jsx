import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import NvigationBar from '../pages/Shared/NvigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NvigationBar></NvigationBar>
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

export default Main;