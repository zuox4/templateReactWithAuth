import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthProvider';
import Root from './lk/Root';
import Register from './pages/Register';
import Abcient from './lk/Abcient';
const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/lk', element: <Root/>,
    children:[
      {path:'outs', element:<div>Выходы</div>}, 
      {path:'abcient', element: <Abcient/>},
      {path:'',element:<div>Профиль</div>}
    ] },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;