import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login"
import Browse from "./components/Browse"
import { Provider } from "react-redux";
import appStore from "./appStore"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Provider store={appStore}/>
    </div>
  );
}

export default App;
