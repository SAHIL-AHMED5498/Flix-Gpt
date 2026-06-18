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
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            borderRadius: '12px',
            padding: '12px 20px',
            fontSize: '0.95rem',
            boxShadow: '0 8px 32px rgba(168, 85, 247, 0.15)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
          },
          success: {
            icon: '✅',
            style: {
              background: 'rgba(20, 83, 45, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              borderRadius: '12px',
              padding: '12px 20px',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            },
          },
          error: {
            icon: '⚠️',
            style: {
              background: 'rgba(127, 29, 29, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              borderRadius: '12px',
              padding: '12px 20px',
              boxShadow: '0 8px 32px rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            },
          },
          loading: {
            style: {
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(10px)',
              color: '#a78bfa',
              borderRadius: '12px',
              padding: '12px 20px',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
            },
          },
        }}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
