import { RouterProvider } from "react-router-dom";
import mainRoute from "./Routes/MainRoute";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    
  }, [])

  return (
    <RouterProvider router={mainRoute}/>
  );
};

export default App;