import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootComponent from './pages/root';
import DashBoard from './Task-pages/DashBoard';
import AddNewTask from './Task-pages/AddNewTask';

const router = createBrowserRouter([
  {path:'/', element:<RootComponent/>,children:[
    {path:'', element:<DashBoard/>},
    {path:'Add-New-task',element:<AddNewTask/>}
  ]}
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
