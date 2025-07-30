
import './App.css';
import Browse from './Components/Browse';
import Layout from "./Components/Layout"
import Login from './Components/Login';
import Error from './Components/Error';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
function App() {

const routes=createBrowserRouter([
  {path:"/",
    element:<Layout/>,

    children:[
      {path:"/",element:<Login/>},
      {path:"/browse",element:<Browse/>}
    ],
    errorElement:<Error/>

  }

])

  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
