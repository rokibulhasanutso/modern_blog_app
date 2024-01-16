import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoading from "../components/loading/PageLoading";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import Home from "../pages/home/Home";
import Article from './../pages/articles/Article';
import Profile from "../pages/profile/container/ProfileSideBar";
import ProfileHome from "../pages/profile/ProfileHome";
import CreatePost from "../pages/profile/container/CreatePost";
import ContentEditable from "../pages/profile/container/ContentEditable";

const delay = (component) => new Promise((resolve) => setTimeout(() => resolve(component), 2500));
const App = lazy(() => delay(import('../App')))

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
              element: <ProfileHome/>,
            },
            {
              path: "createpost",
              element: <CreatePost/>,
            },
            {
              path: "demoedit",
              element: <ContentEditable/>,
            },
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