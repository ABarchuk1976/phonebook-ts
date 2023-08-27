import { FC, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import '../index.css';

export const toastMessage = (message: string) => {
  toast.success(message, {
    style: {
      border: '1px solid #a89985',
      padding: '2rem',
      color: '#a89985',
      fontSize: '1rem',
    },
    iconTheme: {
      primary: '#a89985',
      secondary: '#282c34',
    },
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    style: {
      border: '1px solid #a89985',
      padding: '2rem',
      color: '#a89985',
      fontSize: '1rem',
    },
    iconTheme: {
      primary: '#a89985',
      secondary: '#282c34',
    },
  });
};

export const Layout: FC = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
