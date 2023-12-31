import { RouterProvider } from "react-router-dom";
import mainRoute from "./Routes/MainRoute";
import { useEffect } from "react";
import themeSetup from "./utils/themeSetup";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/theme/themeSlice";

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {

    themeSetup((theme) => {
      dispatch(setTheme(theme));
    })
  }, [dispatch])

  return (
    <RouterProvider router={mainRoute}/>
  );
};

export default App;