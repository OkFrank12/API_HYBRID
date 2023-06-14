import { RouterProvider } from "react-router-dom";
import { Mainroutes } from "./Router/MainRoutes";

const App = () => {
  return (
    <div>
      <RouterProvider router={Mainroutes} />
    </div>
  );
};

export default App;
