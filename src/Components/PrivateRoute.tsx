import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ element, ...rest }){
    const { authToken } = useAuth();

    return (
        <Route
            {...rest}
            element={authToken ? element : <Navigate to="/login" />}
        />
    );
};
