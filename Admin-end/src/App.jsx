import Home from './components/Home/Home'
import 'boxicons/css/boxicons.min.css';
import { Router,RouterProvider,createBrowserRouter } from "react-router-dom"
import Student from './components/Student/Student';
import Layout from './Layout';
import Feedback from './components/Feedback/Feedback';

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path :"/",
          element : <Home/>
        },
        {
          path : "/student/:id",
          element : <Student/>
        }
      ]
    },
    {
      path : "/feedback",
      element : <Feedback/>
    }
  ])

  return (
    <>
    <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
