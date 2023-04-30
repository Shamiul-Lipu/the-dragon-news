import React from 'react';
import { Outlet } from 'react-router-dom';
import NvigationBar from '../pages/Shared/NvigationBar';

const LoginLayout = () => {
    return (
        <div>
            <NvigationBar></NvigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;