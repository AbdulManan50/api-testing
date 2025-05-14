import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AuthGuard = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can replace this with a loading spinner component
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}; 