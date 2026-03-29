import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Recommendations from './pages/Recommendations';
import CV from './pages/CV';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/research', element: <Research /> },
      { path: '/teaching', element: <Teaching /> },
      { path: '/achievements', element: <Achievements /> },
      { path: '/blog', element: <Blog /> },
      { path: '/recommendations', element: <Recommendations /> },
      { path: '/cv', element: <CV /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
