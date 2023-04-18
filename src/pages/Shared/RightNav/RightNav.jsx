import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='my-1 '><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary" className='my-1 mx-1'><FaGithub /> Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;