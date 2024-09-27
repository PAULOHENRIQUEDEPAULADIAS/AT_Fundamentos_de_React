
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";


import "./index.css";

import Home from "./pages/home";
import Details from "./pages/details";
import NotFound from "./pages/not_found";
import RedirectToMinhaApp from "./base_name";


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
