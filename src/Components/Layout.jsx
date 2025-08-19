import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import useUserContext from '../utils/useUserContext';
import { useEffect } from 'react';
import { BACKEND_URL } from '../utils/constant';
import axios from 'axios';

const Layout = () => {
  const { user, setUser } = useUserContext(); // assume context provides setUser
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <div>
      <Header />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937', // Tailwind slate-800
            color: '#fff',
            borderRadius: '10px',
            padding: '12px 20px',
            fontSize: '0.95rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          success: {
            icon: '✅',
            style: {
              background: '#15803d', // Tailwind green-700
              color: '#fff',
              borderRadius: '10px',
              padding: '12px 20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
          },
          error: {
            icon: '⚠️',
            style: {
              background: '#b91c1c', // Tailwind red-700
              color: '#fff',
              borderRadius: '10px',
              padding: '12px 20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
          },
        }}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
