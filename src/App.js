
import './App.css';
import Browse from './Components/Browse';
import Layout from "./Components/Layout"
import Login from './Components/Login';
import Error from './Components/Error';
import Body from './Components/Body'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Search from './Components/Search';
function App() {

const routes=createBrowserRouter([
  {path:"/",
    element:<Layout/>,

    children:[
      {path:"/",element:<Login/>},
      {path:"/browse",element:<Browse/>},
      {path:"/body",element:<Body/>},
      {path:"search",element:<Search/>}
    ],
    errorElement:<Error/>

  }

])

  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
