import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
// import SalesNavbar from './SalesNavbar';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <Layout/>
    );
};

export default Dashboard;