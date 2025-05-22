import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser as reduxLoginUser, logoutUser as reduxLogoutUser } from '../Store/LoginSlice';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Just check if loading is done, we don't need to set user here
    // as it's managed by Redux
    setLoading(false);
  }, []);

  const login = (userData) => {
    dispatch(reduxLoginUser(userData));
  };

  const logout = () => {
    dispatch(reduxLogoutUser());
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
