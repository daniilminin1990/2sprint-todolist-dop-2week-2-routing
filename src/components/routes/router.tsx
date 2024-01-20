import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Error404 } from "../pages/Error404";
import { Page } from "../pages/Page";
import { dataState } from "../../data/dataState";
import { ProtectedPage } from "../pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PageInPage } from "../pages/PageInPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/page/:id',
        element: (
          <Page pages={dataState.pages} />
        )
      },
      {
        path: '/page/:id/pip',
        element: (
          <PageInPage />
        )
      },
      {
        path: '/page/protected',
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/page/error',
        element: (
          <Error404 />
        )
      },
    ]
  }
])