import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";
import Signin from "./SignIn";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="max-w-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
