import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Respect the website's intellectual property rights: The news articles and other content on the website are the intellectual property of the website or its content providers. Users should not reproduce, distribute, or modify the content without the website's permission.</p>
            <br />
            <p>Do not share login credentials: Users should not share their login credentials (username and password) with others, as this is a violation of the website's terms of use.</p>
            <br />
            <p>Do not engage in illegal activities: Users should not use the website or its content to engage in illegal activities, such as hacking or spreading malicious software.</p>
            <br />
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;