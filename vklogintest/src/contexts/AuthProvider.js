import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('accessToken'));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false); // Учтите состояние загрузки после первоначальной проверки
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('accessToken');
    setIsAuth(!!token);
  };

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    checkAuth(); // Проверка после логина
    
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    checkAuth(); // Проверка после логаута
    
  };

  return (
    <AuthContext.Provider value={{ isAuth, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};