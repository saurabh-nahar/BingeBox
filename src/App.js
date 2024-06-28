import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login"
import Browse from "./components/Browse"
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
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
    <div className="">
      <Provider store={appStore}>
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
