import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PublicRoute = ({ children }) => {
  const { user, token, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Loading...</p>
    </div>;
  }

  if (user && token) {
    return <Navigate to="/home" replace />;
  }

  return children;
}; 