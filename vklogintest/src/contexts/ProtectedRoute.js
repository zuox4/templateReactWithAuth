import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ element }) => {
  const { isAuth, loading, checkAuth  } = useAuth();
  useEffect(()=>{
    checkAuth()
  })
  if (loading) {
    return <div>Загрузка...</div>;
  }

  return isAuth ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;