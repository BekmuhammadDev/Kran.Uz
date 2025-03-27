import React from 'react';
import Header from '../../components/layouts/header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className='px-10'>
            <Outlet/>
            </div>
            
            
        </div>
    );
};

export default MainLayout;