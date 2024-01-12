import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import PageLoading from "../components/loading/PageLoading";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import Home from "../pages/home/Home";
import Article from './../pages/articles/Article';
import Profile from "../pages/profile/Profile";

const mainRoute = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<PageLoading/>}> <App/> </Suspense>,
      errorElement: <NotFound/>,
      children: [
        {
          path: '',
          element: <MainLayout/>,
          children: [
            {
              index: true,
              element: <Home/>,
            },
            {
              path: "articles",
              element: <Article/>,
            },
          ]
        },
        {
          path: '',
          element: <ProfileLayout/>,
          children: [
            {
              path: "profile",
              element: <Profile/>,
            }
          ]
        },
        {
          path: 'auth',
          element: <AuthLayout/>,
          children: [
            {
              path: 'signup',
              element: <Profile/>,
            },
            {
              path: 'signin',
              element: <Profile/>,
            },
            {
              path: 'signout',
              element: <Profile/>,
            },
          ]
        }
      ]
    }
  ])

export default mainRoute;