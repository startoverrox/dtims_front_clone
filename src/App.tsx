import { RouterProvider, createBrowserRouter } from "react-router";
import ProtectedLayout from "@/routes/layouts/ProtectedLayout";
import AuthLayout from "@/routes/layouts/AuthLayout";
import DefaultLayout from "@/routes/layouts/DefaultLayout";
import HomePage from "@/routes/pages/HomePage";
import JobPage from "@/routes/pages/JobPage";
import LoginPage from "@/routes/pages/LoginPage";
import RegisterPage from "@/routes/pages/RegisterPage";
import ErrorPage from "@/routes/pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <ProtectedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/job",
            element: <JobPage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <>GlobalToastHandler</>
      <>ToastContainer</>
    </>
  );
}
