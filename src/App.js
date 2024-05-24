
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import User from './component/users/User';
import AddUser from './component/addUser/AddUser';
import UpdateUser from './component/updateUser/UpdateUser';
function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />
    },
    {
      path: '/add',
      element: <AddUser/>
    },
    {
      path: '/edit/:id',
      element: <UpdateUser/>
    }
])
  return (
    <div className="App">
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
