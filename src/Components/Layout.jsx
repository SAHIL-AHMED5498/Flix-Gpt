import { Outlet} from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
 



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
