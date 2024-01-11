import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoading from "../components/loading/PageLoading";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import Home from "../pages/home/Home";
import Article from './../pages/articles/Article';

const mainRoute = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<PageLoading/>}><MainLayout/></Suspense>,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "articles",
          element: <Article/>,
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout/>,
    }
  ])

export default mainRoute;