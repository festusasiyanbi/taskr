import React, { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import UserProfile from '../profile/UserProfile';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const { user, loading, error } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        <div>Error: {error}</div>
    }
    return user ? <UserProfile /> : <Login />;
};

export default ProtectedRoute;
