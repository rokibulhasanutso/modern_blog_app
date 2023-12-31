import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoading from "../components/loading/PageLoading";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notfound/NotFound";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";

const mainRoute = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<PageLoading/>}><MainLayout/></Suspense>,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout/>,
    }
  ])

export default mainRoute;