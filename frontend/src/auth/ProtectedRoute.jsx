import React, { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import UserProfile from '../profile/UserProfile';
import Login from './Login';
import Signup from './Signup';

const ProtectedRoute = () => {
    const { user, loading, error } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>
    }
    return user ? <UserProfile /> : <Signup />;
};

export default ProtectedRoute;
