import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { Suspense, lazy } from "react";
import PageLoading from "./components/loading/PageLoading";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/home/Home";
const MainLayout = lazy(() => import("./layouts/MainLayout"))

const App = () => {

  const router = createBrowserRouter([
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

  return (
    <RouterProvider router={router}/>
  );
};

export default App;