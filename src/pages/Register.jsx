import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [accepted, setAccepted] = useState(false)
    const { createUser, auth } = useContext(AuthContext);

    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: `${photo}`
                })
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleTerms = e => {
        setAccepted(e.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleTerms}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;