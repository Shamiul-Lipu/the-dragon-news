import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../Providers/AuthProvider';



const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favor</p>
                <p>{moment().format("dddd, MMMM, Do YYYY, h:mm:ss a")}</p>
            </div>
            {/* marquee */}
            <div className='d-flex '>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            {/* navbar */}

        </Container>
    );
};

export default Header;