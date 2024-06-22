import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login"
import Browse from "./components/Browse"

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
    </div>
  );
}

export default App;
