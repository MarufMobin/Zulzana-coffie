
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const {user} = useAuth()
    return (<h1>WelCome To {user?.displayName}</h1>
    );
};

export default DashboardHome;