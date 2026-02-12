import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const defaultRoute=() => {
  const authData = JSON.parse(localStorage.getItem('authData'));
  if(authData){
    return<Navigate to="/login"replace/>
  }
  return< Navigate to="/register"replace/>
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
        {
      path: "/Dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
