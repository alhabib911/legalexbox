import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 px-3'>{
                children
            }</div>
        </div>
    );
};

export default Layout;