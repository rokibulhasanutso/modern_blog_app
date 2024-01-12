import { useEffect } from "react";
import themeSetup from "./utils/themeSetup";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/theme/themeSlice";
import { Outlet } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {

    themeSetup((theme) => {
      dispatch(setTheme(theme));
    })
  }, [dispatch])

  return (
    <Outlet/>
  );
};

export default App;