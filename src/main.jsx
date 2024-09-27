
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import { useEffect } from 'react';

import "./index.css";

import Home from "./pages/home";
import Details from "./pages/details";
import NotFound from "./pages/not_found";

function RedirectToMinhaApp() {
  const navigate = useNavigate();

  useEffect(() => {

    navigate('/minha-app', { replace: true });
  }, [navigate]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RedirectToMinhaApp />,
  },
  {
    path: "/minha-app",
    element: <Home />,
  },
  { 
    path: "/minha-app/details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} ></RouterProvider>
);
